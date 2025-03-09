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

  doLogin(){
    const formValue = this.userForm.value;

    if (formValue.username == '' || formValue.password == '') {
      alert('Credenciales Incorrectas');
      return;
    }

    this.request.username = formValue.username;
    this.request.password = formValue.password;

    this.integration.doLogin(this.request).subscribe({
      next:(res) => {
        console.log("Recived Response:" +res.token);
      }, error: (err) => {
        console.log("Error Recived Response"+err);
      }
    })
  }

}
