import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutRoutingModule} from './layout-routing.module';
import {HomeComponent} from './home/home.component';
import {SharedmoduleModule} from '../SharedModule/sharedmodule.module';
import {SliderComponent} from './home/slider/slider.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {DiscountProductsComponent} from './home/discount-products/discount-products.component';
import {SubscriptionComponent} from './home/subscription/subscription.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RippleModule} from 'primeng/ripple';
import {ProductsComponent} from './home/products/products.component';
import {FeaturesComponent} from './home/features/features.component';
import {AdvertisingComponent} from './home/advertising/advertising.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import {SharedComponentsModule} from '../sharedComponents/shared-components.module';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
import { CartComponent } from './home/cart/cart.component';
import {StepsModule} from 'primeng/steps';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {NgxSpinnerModule} from 'ngx-spinner';
import { AllProductComponent } from './home/all-product/all-product.component';


@NgModule({
  declarations: [HomeComponent, SliderComponent,
    DiscountProductsComponent, SubscriptionComponent,
    ProductsComponent, FeaturesComponent, AdvertisingComponent,
    AboutComponent, ContactComponent, ProductDetailComponent,
    CartComponent, AllProductComponent],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        SharedmoduleModule,
        NgbCarouselModule,
        CarouselModule,
        ReactiveFormsModule,
        RippleModule,
        PanelMenuModule,
        SharedComponentsModule,
        StepsModule,
        MatStepperModule,
        MatSelectModule,
        MatCardModule,
        NgxSpinnerModule
    ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class LayoutModule {
}
