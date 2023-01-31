import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './pages/chat/chat.component';
import { ChatHeaderComponent } from './components/chat-header/chat-header.component';
import { ChatUserInputComponent } from './components/chat-user-input/chat-user-input.component';




@NgModule({
  declarations: [
    ChatComponent,
    ChatHeaderComponent,
    ChatUserInputComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
