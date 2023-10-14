import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { register } from 'src/app/shared/models/register';
import { RegisterService } from '../register-service/register.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss'],
  providers: [MessageService]
})
export class RegisterContainerComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router,
    private messageService: MessageService
  ){}

  ngOnInit(): void {
    this.createLoginForm(new register())
  }

  registerForm!: FormGroup;
  public createLoginForm(register: register){
    this.registerForm = this.formBuilder.group({
      name: [register.name, [Validators.required]],
      username: [register.username, [Validators.required, Validators.email]],
      password: [register.password, [Validators.required]],
      telefone: [register.telefone, [Validators.required]],
    })
  }

  public submitForm(){
    if(this.registerForm.valid){
      this.registerService.registerUser(this.registerForm.value).subscribe({
        next: (res: any) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Usuário Cadastrado' });
          this.router.navigate(['login'])
        },
        error: (err: any) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Dados Inválidos'});
        }
      })
    }else{
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Dados Inválidos'});
    }
  }



}
