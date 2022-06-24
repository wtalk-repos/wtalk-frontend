import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../shared/shared.module';
import { SignInComponent } from './components/signin/signin.component';
import { AccountService } from 'src/app/core/services/account/account.service';


@NgModule({
  declarations: [
    LandingComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule,
  ],
  providers: [
    AccountService
  ]
})
export class LandingModule { }
