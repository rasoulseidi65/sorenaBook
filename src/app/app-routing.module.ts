import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginRegisterUserComponent} from './Auth/User/login-register-user.component';
import {LoginAdminComponent} from './Auth/Admin/login-admin.component';

const routes: Routes = [
  {
    path: 'loginUser',
    component: LoginRegisterUserComponent
  },
  {
    path: 'loginAdmin',
    component: LoginAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
