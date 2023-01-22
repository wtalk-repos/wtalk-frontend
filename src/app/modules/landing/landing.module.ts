import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './pages/landing.component';
import { SignInComponent } from './components/signin/signin.component';
import { SingUpComponent } from './components/signup/signup.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    LandingComponent,
    SignInComponent,
    SingUpComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule,
  ],
  providers: [
  ]
})
export class LandingModule { }
