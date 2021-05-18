import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboarduserRoutingModule } from './dashboarduser-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SharedmoduleModule} from '../../SharedModule/sharedmodule.module';
import { OrderComponent } from './order/order.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [DashboardComponent, OrderComponent, ProfileComponent],
  imports: [
    CommonModule,
    DashboarduserRoutingModule,
    SharedmoduleModule
  ]
})
export class DashboarduserModule { }
