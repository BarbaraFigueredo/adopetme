import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedMaterialModule } from '../../shared/material.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';

@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent, ForgotPasswordPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    SharedMaterialModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [provideNgxMask()],
})
export class AuthModule {}
