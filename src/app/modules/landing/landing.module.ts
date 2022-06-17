import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
