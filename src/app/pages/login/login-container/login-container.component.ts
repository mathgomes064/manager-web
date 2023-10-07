import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { login } from 'src/app/shared/models/login';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
  ){}

  ngOnInit(): void {
    this.createLoginForm(new login())
  }

  loginForm!: FormGroup;
  public createLoginForm(register: login){
    this.loginForm = this.formBuilder.group({
      email: [register.email, [Validators.required, Validators.email]],
      password: [register.password, [Validators.required]]
    })
  }
  
  public submitForm(){
    console.log(this.loginForm.value)
  }

}
