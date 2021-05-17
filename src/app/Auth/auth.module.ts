import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginRegisterUserComponent } from './User/login-register-user.component';
import { LoginAdminComponent } from './Admin/login-admin.component';
import {LayoutModule} from '../layout/layout.module';
import {SharedmoduleModule} from '../SharedModule/sharedmodule.module';
import {SharedComponentsModule} from '../sharedComponents/shared-components.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [LoginRegisterUserComponent, LoginAdminComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LayoutModule,
    SharedmoduleModule,
    SharedComponentsModule
  ],

})
export class AuthModule { }
