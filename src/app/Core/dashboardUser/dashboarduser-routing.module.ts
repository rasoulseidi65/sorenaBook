import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {OrderComponent} from './order/order.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children:[{
      path:'' ,
      component: OrderComponent
    }]
  },
  {
    path:'',
    component: DashboardComponent,
    children:[{
      path:'order' ,
      component: OrderComponent
    }]
  },
  {
    path:'',
    component: DashboardComponent,
    children:[{
      path:'profile' ,
      component: ProfileComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboarduserRoutingModule { }
