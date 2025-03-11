import { Component } from '@angular/core';
import { IntegrationService } from '../../services/integration.service';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginRequest } from '../../models/login-request';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private integration : IntegrationService){}

  userForm : FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  request: LoginRequest = new LoginRequest;

  doLogin() {
    const formValue = this.userForm.value;

    if (formValue.username.trim() === '' || formValue.password.trim() === '') {
      alert('Credenciales Incorrectas');
      return;
    }

    const request: LoginRequest = {
      username: formValue.username,
      password: formValue.password
    };

    this.integration.doLogin(request).subscribe({
      next: (res) => {
        console.log("Recibido Response: " + res.token);
        localStorage.setItem("token", res.token ?? '');

      },
      error: (err) => {
        console.log("Error recibido: ", err);
        alert("Error al iniciar sesión");
      }
    });
  }
}