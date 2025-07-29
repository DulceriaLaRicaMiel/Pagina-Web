import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { soloLetrasValidator, soloLetras, soloNumerosValidator } from '../../../validations/validators';
import { ActivitiesService } from '../../services/Activities.service';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';
  loading: boolean = false;
  isEmpleado: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private activitiesService: ActivitiesService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      tipoUsuario: ['cliente'],
      nombre: ['', [Validators.required, Validators.maxLength(40), soloLetrasValidator()]],
      apellidoPaterno: ['', [Validators.required, Validators.maxLength(40), soloLetrasValidator()]],
      apellidoMaterno: ['', [Validators.maxLength(40), soloLetrasValidator()]], // Hacer opcional
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/), soloNumerosValidator(10)]],
      correo: ['', [Validators.required, Validators.email, Validators.maxLength(60)]],
      contrasenia: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(255)]],
      confirmarContrasenia: ['', [Validators.required, Validators.maxLength(255)]],
      nss: ['', [Validators.minLength(11), Validators.maxLength(11), soloNumerosValidator(11)]],
      rfc: ['', [Validators.minLength(12), Validators.maxLength(13), 
           Validators.pattern(/^[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{2}[0-9A]$/i)]]
    }, {
      validators: this.passwordMatchValidator
    });

     this.registerForm.addControl('codigoInvitacion', new FormControl(''));

    this.registerForm.get('tipoUsuario')?.valueChanges.subscribe(val => {
      this.isEmpleado = val === 'empleado';
      this.toggleEmpleadoValidators();
      this.toggleCodigoValidator();
    });
    this.toggleCodigoValidator();
  }

  private toggleCodigoValidator(): void {
    if (this.isEmpleado) {
    // Asegura que el campo exista
    if (!this.registerForm.contains('codigoInvitacion')) {
      this.registerForm.addControl('codigoInvitacion', new FormControl('', [
        Validators.required,
        Validators.maxLength(15),
        this.validarCodigoInvitacion.bind(this)
      ]));
    } else {
      const codigoControl = this.registerForm.get('codigoInvitacion');
      codigoControl?.setValidators([
        Validators.required,
        Validators.maxLength(15),
        this.validarCodigoInvitacion.bind(this)
      ]);
      codigoControl?.updateValueAndValidity();
    }
  } else {
    // Remueve el campo si existe
    if (this.registerForm.contains('codigoInvitacion')) {
      this.registerForm.removeControl('codigoInvitacion');
    }
  }
  }

  validarCodigoInvitacion(control: AbstractControl): ValidationErrors | null {
    const codigo = control.value;
    if (!codigo) return null;
    
    return environment.empleadoCodes.includes(codigo) 
      ? null 
      : { codigoInvalido: true };
  }
  
  onKeyPress(event: KeyboardEvent): boolean {
    return soloLetras(event);
  }

  soloNumeros(event: KeyboardEvent): boolean {
    const charCode = event.key.charCodeAt(0);
    return (charCode >= 48 && charCode <= 57);
  }

  limitarLongitud(event: Event, maxLength: number): void {
    const input = event.target as HTMLInputElement;
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
      this.registerForm.get(input.name)?.setValue(input.value);
    }
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('contrasenia')?.value;
    const confirmPassword = formGroup.get('confirmarContrasenia')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  toggleEmpleadoValidators() {
    const nssControl = this.registerForm.get('nss');
    const rfcControl = this.registerForm.get('rfc');

    if (this.isEmpleado) {
      nssControl?.setValidators([
        Validators.required, 
        Validators.minLength(11), 
        Validators.maxLength(11), 
        soloNumerosValidator(11)
      ]);
      rfcControl?.setValidators([
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(13),
        Validators.pattern(/^[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{2}[0-9A]$/i)
      ]);
    } else {
      nssControl?.clearValidators();
      rfcControl?.clearValidators();
    }

    nssControl?.updateValueAndValidity();
    rfcControl?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.registerForm.valid && !this.loading) {
      this.loading = true;
      this.errorMessage = '';

      const formData = this.registerForm.value;
      console.log('Datos del formulario:', formData);

      const registerData: any = {
        Nombre: formData.nombre.trim(),
        ApPaterno: formData.apellidoPaterno.trim(),
        ApMaterno: formData.apellidoMaterno?.trim() || null, // Enviar null si está vacío
        Telefono: formData.telefono.trim(),
        Correo: formData.correo.trim().toLowerCase(),
        Contrasenia: formData.contrasenia
      };

      if (this.isEmpleado) {
        delete formData.codigoInvitacion;
        // Asegurar que el NSS tenga exactamente 11 dígitos
        registerData.NSS = formData.nss.trim().substring(0, 11);
        // Formatear RFC a mayúsculas y sin espacios
        registerData.RFC = formData.rfc.trim().toUpperCase().replace(/\s/g, '');

        registerData.CodigoInvitacion = formData.codigoInvitacion;

        console.log('Registrando empleado con datos:', registerData);
        
        this.authService.registerEmpleado(registerData).subscribe({
          next: () => this.handleSuccess(),
          error: (err) => this.handleError(err)
        });
      } else {
        console.log('Registrando cliente con datos:', registerData);
        
        this.authService.registerCliente(registerData).subscribe({
          next: () => this.handleSuccess(),
          error: (err) => this.handleError(err)
        });
      }
    } else {
      this.markFormGroupTouched(this.registerForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  handleSuccess() {
    this.loading = false;
     const formData = this.registerForm.value;
  const userType = this.isEmpleado ? 'empleado' : 'cliente';
  
  this.activitiesService.registerActivity(
    { 
      nombre: formData.nombre, 
      appaterno: formData.apellidoPaterno,
      apmaterno: formData.apellidoMaterno 
    },
    `Se registró un nuevo ${userType}: ${formData.nombre} ${formData.apellidoPaterno}`,
    userType as 'employee' | 'client',
    'created'
  );
    this.router.navigate(['/login'], {
      queryParams: { registered: true }
    });
  }

  handleError(error: any) {
    this.loading = false;
    console.error('Error completo:', error);
    
    if (error.error?.error?.includes('character varying(11)')) {
      this.errorMessage = 'El NSS debe tener exactamente 11 dígitos';
    } else if (error.error?.error) {
      this.errorMessage = `Error del servidor: ${error.error.error}`;
    } else if (error.error?.message) {
      this.errorMessage = error.error.message;
    } else {
      this.errorMessage = 'Error en el registro. Intente nuevamente.';
    }
  }
}