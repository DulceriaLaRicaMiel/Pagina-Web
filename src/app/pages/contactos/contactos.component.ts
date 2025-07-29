import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { soloLetrasValidator, soloLetras, dominioEspecificoValidator } from '../../validations/validators';

@Component({
  selector: 'app-contactos',
  standalone: false,
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css'
})
export class ContactosComponent {
  contactForm: FormGroup;
  submitted = false;
  successMessage = '';
  isLoading = false;
  email: string = 'dulcerialaricamiel00@hotmail.com';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(40), soloLetrasValidator()]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      subject: ['', [Validators.required, Validators.maxLength(50), soloLetrasValidator()]],
      message: ['', [Validators.required, Validators.maxLength(300), soloLetrasValidator()]]
    });
  }

  validarCorreo(): void {
    const correoControl = this.contactForm.get('email');
    if (correoControl?.invalid) {
      console.log('Correo inválido');
    } else {
      console.log('Correo válido');
    }
  }

  onKeyPress(event: KeyboardEvent): boolean {
    return soloLetras(event);
  }

  limitarLongitud(event: Event, maxLength: number): void {
    const input = event.target as HTMLInputElement;
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
  }

  async onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.valid) {
      this.isLoading = true;
      
      const formData = new FormData();
      formData.append('name', this.contactForm.value.name);
      formData.append('email', this.contactForm.value.email);
      formData.append('subject', this.contactForm.value.subject);
      formData.append('message', this.contactForm.value.message);
      formData.append('_next', 'http://localhost:4200/contactos');
      formData.append('_captcha', 'false');
      formData.append('_template', 'table');

      try {
        const response = await fetch('https://formsubmit.co/ajax/dulcerialaricamiel00@hotmail.com', {
          method: 'POST',
          body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
          this.successMessage = '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.';
          this.contactForm.reset();
          this.submitted = false;
        } else {
          this.successMessage = 'Hubo un problema al enviar el mensaje. Por favor inténtalo nuevamente.';
        }
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
        this.successMessage = 'Error al conectar con el servidor. Por favor verifica tu conexión.';
      } finally {
        this.isLoading = false;
        setTimeout(() => {
          this.successMessage = '';
        }, 5000);
      }
    }
  }

  get f() { return this.contactForm.controls; }
}