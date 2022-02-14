import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LongPageComponent } from './long-page/long-page.component';

const routes: Routes = [
  {
    path: '',
    component: LongPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LongPageRoutingModule { }
