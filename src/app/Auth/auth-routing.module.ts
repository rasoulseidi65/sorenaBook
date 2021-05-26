import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginRegisterUserComponent} from './User/login-register-user.component';
import {LoginAdminComponent} from './Admin/login-admin.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {
    path: 'loginUser',
    component: LoginRegisterUserComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'loginAdmin',
    component: LoginAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
