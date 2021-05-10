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


@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, SliderComponent, DiscountProductsComponent, SubscriptionComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedmoduleModule,
    NgbCarouselModule,
    CarouselModule,
    ReactiveFormsModule,
    RippleModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class LayoutModule { }
