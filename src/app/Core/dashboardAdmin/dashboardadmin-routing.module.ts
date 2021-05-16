import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CategoriesComponent} from './categories/categories.component';
import {FeaturesComponent} from './features/features.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardadminRoutingModule {
}
