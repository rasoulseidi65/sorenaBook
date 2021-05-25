import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CategoriesComponent} from './categories/categories.component';
import {FeaturesComponent} from './features/features.component';
import {ProductsComponent} from './products/products.component';
import {OrderComponent} from './order/order.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path:'',
    component: DashboardComponent,
    children:[
      {
        path: 'categories',
        component: CategoriesComponent
      }
    ]
  },
  {
    path:'',
    component: DashboardComponent,
    children:[
      {
        path: 'features',
        component: FeaturesComponent
      }
    ]
  },
  {
    path:'',
    component: DashboardComponent,
    children:[
      {
        path: 'products',
        component: ProductsComponent
      }
    ]
  },
  {
    path:'',
    component: DashboardComponent,
    children:[
      {
        path: 'order',
        component: OrderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardadminRoutingModule {
}
