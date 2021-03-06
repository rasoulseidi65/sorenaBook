import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginRegisterUserComponent} from '../Auth/User/login-register-user.component';
import {AboutComponent} from './home/about/about.component';
import {ContactComponent} from './home/contact/contact.component';
import {ProductDetailComponent} from './home/product-detail/product-detail.component';
import {CartComponent} from './home/cart/cart.component';
import {AllProductComponent} from './home/all-product/all-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginRegisterUserComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'products',
    component: AllProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
