import { Component, Input, OnInit } from '@angular/core';
import { Message } from '@chat/models/message';
import { MessageService } from '@chat/services/message.service';
import { SignalRService } from '@chat/services/signal-r.service';
import { AccountService } from '@core/services/account/account.service';
import { User } from '@shared/models/user';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit {
  messages: Message[] = new Array<Message>();
  currentUser: User;

  constructor(
    private accountService: AccountService,
    private messageService: MessageService,
    private signalRService: SignalRService
  ) { }

  ngOnInit(): void {
    this.messageService.$messages.subscribe(messages => {
      this.messages = messages;
    })

    this.currentUser = this.accountService.currentUser;

    this.signalRService.hubConnection.on('newMessage', (message: Message) => {
      console.log(message);
      this.messageService.newMessage(message);
    })
  }

}
