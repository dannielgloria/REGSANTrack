import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    AuthLayoutComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ClarityModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
