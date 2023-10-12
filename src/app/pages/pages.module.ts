import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeContainerComponent } from './home/home-container/home-container.component';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterContainerComponent } from './register/register-container/register-container.component';
import { LoginContainerComponent } from './login/login-container/login-container.component';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    HomeComponent,
    HomeContainerComponent,
    LoginComponent,
    RegisterComponent,
    RegisterContainerComponent,
    LoginContainerComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    ChartModule,
    DialogModule,
    InputNumberModule,
    ProgressSpinnerModule,
    TableModule,
    PasswordModule,
    InputTextModule,
    ToastModule
  ]
})
export class PagesModule { }
