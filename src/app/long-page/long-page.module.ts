import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LongPageRoutingModule } from './long-page-routing.module';
import { LongPageComponent } from './long-page/long-page.component';


@NgModule({
  declarations: [
    LongPageComponent
  ],
  imports: [
    CommonModule,
    LongPageRoutingModule
  ]
})
export class LongPageModule { }
