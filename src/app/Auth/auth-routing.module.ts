import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginRegisterUserComponent} from './User/login-register-user.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
