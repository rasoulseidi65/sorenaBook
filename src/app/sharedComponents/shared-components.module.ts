import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {SharedmoduleModule} from '../SharedModule/sharedmodule.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {MatOptionModule} from '@angular/material/core';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, SearchBarComponent],
    imports: [
        CommonModule,
        SharedmoduleModule,
        MatOptionModule
    ],
  exports: [FooterComponent, HeaderComponent],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ],
})
export class SharedComponentsModule { }
