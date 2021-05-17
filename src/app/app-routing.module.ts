import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'admin/panel',
    loadChildren: () => import('./Core/dashboardAdmin/dashboardadmin.module').then(m => m.DashboardadminModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./Auth/auth.module').then(m => m.AuthModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
