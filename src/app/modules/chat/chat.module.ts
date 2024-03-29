import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './pages/chat/chat.component';
import { ChatHeaderComponent } from './components/chat-header/chat-header.component';
import { ChatUserInputComponent } from './components/chat-user-input/chat-user-input.component';
import { ChatMessagesComponent } from './components/chat-messages/chat-messages.component';
import { SignalRService } from './services/signal-r.service';
import { MessageService } from './services/message.service';
import { ChatBubbleComponent } from './components/chat-bubble/chat-bubble.component';




@NgModule({
  declarations: [
    ChatComponent,
    ChatHeaderComponent,
    ChatUserInputComponent,
    ChatMessagesComponent,
    ChatBubbleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChatRoutingModule
  ],
  providers:[
    SignalRService,
    MessageService
  ]
})
export class ChatModule { }
