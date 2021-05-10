import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginRegisterUserComponent } from './User/login-register-user.component';
import { LoginAdminComponent } from './Admin/login-admin.component';


@NgModule({
  declarations: [LoginRegisterUserComponent, LoginAdminComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
