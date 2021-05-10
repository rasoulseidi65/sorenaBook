import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginRegisterUserComponent } from './User/login-register-user.component';
import { LoginAdminComponent } from './Admin/login-admin.component';
import {SharedmoduleModule} from '../SharedModule/sharedmodule.module';


@NgModule({
  declarations: [LoginRegisterUserComponent, LoginAdminComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedmoduleModule
  ]
})
export class AuthModule { }
