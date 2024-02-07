import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  private fb = inject( FormBuilder );

  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(6)]]
  });

  showError = false;

  login(){
    if (this.verificarCredenciales()) {
      console.log(this.loginForm.value)
    } else {
      this.showError = true;
    }
  }

  private verificarCredenciales(): boolean {
    // Lógica para verificar el correo y la contraseña
    // Devuelve true si las credenciales son correctas, de lo contrario, false.
    return false; // Cambia esto según tu lógica de verificación
  }
}
