import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SharedmoduleModule} from './SharedModule/sharedmodule.module';
import {HttpClientModule} from '@angular/common/http';
import {SharedComponentsModule} from './sharedComponents/shared-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedmoduleModule,
    HttpClientModule,
    SharedComponentsModule,
    NgbModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
