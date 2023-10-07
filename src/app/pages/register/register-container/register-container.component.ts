import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { register } from 'src/app/shared/models/register';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss']
})
export class RegisterContainerComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
  ){}

  ngOnInit(): void {
    this.createLoginForm(new register())
  }

  registerForm!: FormGroup;
  public createLoginForm(register: register){
    this.registerForm = this.formBuilder.group({
      nome: [register.nome, [Validators.required]],
      email: [register.email, [Validators.required, Validators.email]],
      password: [register.password, [Validators.required]],
      telefone: [register.telefone, [Validators.required]],
    })
  }

  public submitForm(){
    console.log(this.registerForm.value)
  }



}
