import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class RegistroComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.error = '';
    if (!this.email || !this.password) {
    this.error = 'Por favor, completa todos los campos.';
    return;
    }
    if (this.password !== this.confirmPassword) {
      this.error = 'Las contraseñas no coinciden';
      return;
    }
    if (!this.authService.register(this.email, this.password)) {
      this.error = 'El usuario ya existe';
      return;
    }
    alert('¡Usuario registrado con éxito!');
    this.router.navigate(['/login']);
  }
}
