import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasenia: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loading = true;
      this.errorMessage = '';

      const { correo, contrasenia } = this.loginForm.value;

      this.authService.login(correo, contrasenia).subscribe({
        next: () => {
          this.router.navigate(['/inicio']);
        },
        error: (err) => {
          this.loading = false;
          this.errorMessage = err.error?.message || 'Error al iniciar sesión';
        },
        complete: () => {
          this.loading = false;
        }
      });
    }
  }
}