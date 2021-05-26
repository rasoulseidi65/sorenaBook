import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from "@angular/material/icon";
import {  DateAdapter,  MAT_DATE_FORMATS,  MAT_DATE_LOCALE } from "@angular/material/core";

import { MaterialPersianDateAdapter, PERSIAN_DATE_FORMATS } from "./material.persian-date.adapter";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
   MatIconModule,
    MatDatepickerModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule,


  ],
  providers: [

    { provide: DateAdapter, useClass: MaterialPersianDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_LOCALE, useValue: 'fa-IR' },
    { provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS }
  ]
})
export class MatrialComponentModule { }
