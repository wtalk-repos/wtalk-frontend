import { NgModule } from '@angular/core';

import { MenuRoutingModule } from './menu-routing.module';

import { CommonModule } from '@angular/common';
import { MenuComponent } from './pages/menu/menu.component';
import { FriendsModule } from '../friends/friends.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MenuRoutingModule,
    FriendsModule
  ],
  providers: [
  ]
})
export class MenuModule { }
