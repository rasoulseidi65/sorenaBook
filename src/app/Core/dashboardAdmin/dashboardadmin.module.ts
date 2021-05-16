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


@NgModule({
  declarations: [DashboardComponent, CategoriesComponent, CategoryAddDialogComponent, CategoryEditDialogComponent, SubCategoryAddDialogComponent, SubCategoryEditDialogComponent, FeaturesComponent],
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
  ],
  entryComponents: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DashboardadminModule { }
