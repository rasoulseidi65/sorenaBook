import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserGuard} from './Auth/Guard/user.guard';
import {AdminGuard} from './Auth/Guard/admin.guard';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'admin/panel',
    loadChildren: () => import('./Core/dashboardAdmin/dashboardadmin.module').then(m => m.DashboardadminModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'user/panel',
    loadChildren: () => import('./Core/dashboardUser/dashboarduser.module').then(m => m.DashboarduserModule),
    canActivate: [UserGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./Auth/auth.module').then(m => m.AuthModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled', scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
