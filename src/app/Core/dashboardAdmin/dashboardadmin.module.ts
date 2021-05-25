import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardadminRoutingModule } from './dashboardadmin-routing.module';
import {SharedmoduleModule} from '../../SharedModule/sharedmodule.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutModule} from '@angular/cdk/layout';
import {HttpClientModule} from '@angular/common/http';
import {DashboardComponent} from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryAddDialogComponent } from './categories/category-add-dialog/category-add-dialog.component';
import { CategoryEditDialogComponent } from './categories/category-edit-dialog/category-edit-dialog.component';
import { SubCategoryAddDialogComponent } from './categories/sub-category-add-dialog/sub-category-add-dialog.component';
import { SubCategoryEditDialogComponent } from './categories/sub-category-edit-dialog/sub-category-edit-dialog.component';
import { FeaturesComponent } from './features/features.component';
import {RippleModule} from 'primeng/ripple';
import { FeatureAddDialogComponent } from './features/feature-add-dialog/feature-add-dialog.component';
import { FeatureEditDialogComponent } from './features/feature-edit-dialog/feature-edit-dialog.component';
import { FeatureValueAddDialogComponent } from './features/feature-value-add-dialog/feature-value-add-dialog.component';
import { FeatureValueEditDialogComponent } from './features/feature-value-edit-dialog/feature-value-edit-dialog.component';
import { ProductsComponent } from './products/products.component';
import { ProductAddDialogComponent } from './products/product-add-dialog/product-add-dialog.component';
import { ProductEditDialogComponent } from './products/product-edit-dialog/product-edit-dialog.component';
import {InputSwitchModule} from 'primeng/inputswitch';
import { OrderComponent } from './order/order.component';
import { UserOrdersComponent } from './order/user-orders/user-orders.component';


@NgModule({
  declarations: [DashboardComponent, CategoriesComponent, CategoryAddDialogComponent, CategoryEditDialogComponent, SubCategoryAddDialogComponent, SubCategoryEditDialogComponent, FeaturesComponent, FeatureAddDialogComponent, FeatureEditDialogComponent, FeatureValueAddDialogComponent, FeatureValueEditDialogComponent, ProductsComponent, ProductAddDialogComponent, ProductEditDialogComponent, OrderComponent, UserOrdersComponent],
  imports: [
    CommonModule,
    DashboardadminRoutingModule,
    SharedmoduleModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    HttpClientModule,
    RippleModule,
    InputSwitchModule,

  ],
  entryComponents: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DashboardadminModule { }
