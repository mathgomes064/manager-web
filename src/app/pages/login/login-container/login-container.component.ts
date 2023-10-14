import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { login } from 'src/app/shared/models/login';
import { LoginService } from '../login-service/login.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
  providers: [MessageService]
})
export class LoginContainerComponent implements OnInit {
  public showSpinner: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private messageService: MessageService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.createLoginForm(new login())
  }

  loginForm!: FormGroup;
  public createLoginForm(register: login){
    this.loginForm = this.formBuilder.group({
      username: [register.username, [Validators.required, Validators.email]],
      password: [register.password, [Validators.required]]
    })
  }
  
  public submitForm() {
    if (this.loginForm.valid) {
      this.showSpinner = true;
  
      this.loginService.login(this.loginForm.value).subscribe({
        next: (res: any) => {
          localStorage.clear();
          localStorage.setItem('access_token', res.access);
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Logando...'
          });
          this.router.navigate(['home']);
        },
        error: (err) => {
          this.showSpinner = false;
          this.messageService.add({severity: 'error', summary: 'Error', detail: "Email ou senha inválidos"
          });
        },
        complete: () => {
          this.showSpinner = false;
        }
      });
    } else {
      this.messageService.add({severity: 'error', summary: 'Error', detail: "Email ou senha inválidos"
      });
    }
  }
  

}
