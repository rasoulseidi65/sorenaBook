import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component';
import {HeaderComponent} from './sharedComponents/header/header.component';
import {SharedmoduleModule} from '../SharedModule/sharedmodule.module';
import {FooterComponent} from './sharedComponents/footer/footer.component';
import { SliderComponent } from './home/slider/slider.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {DiscountProductsComponent} from './home/discount-products/discount-products.component';
import {SubscriptionComponent} from './home/subscription/subscription.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RippleModule} from 'primeng/ripple';
import {ProductsComponent} from './home/products/products.component';
import {FeaturesComponent} from './home/features/features.component';
import { AdvertisingComponent } from './home/advertising/advertising.component';
import {PanelMenuModule} from 'primeng/panelmenu';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, SliderComponent, DiscountProductsComponent, SubscriptionComponent, ProductsComponent, FeaturesComponent, AdvertisingComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedmoduleModule,
    NgbCarouselModule,
    CarouselModule,
    ReactiveFormsModule,
    RippleModule,
    PanelMenuModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    FooterComponent
  ]
})
export class LayoutModule { }
