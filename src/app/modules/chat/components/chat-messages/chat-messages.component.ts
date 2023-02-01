import { Component, Input, OnInit } from '@angular/core';
import { Message } from '@chat/models/message';
import { AccountService } from '@core/services/account/account.service';
import { User } from '@shared/models/user';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit {
  @Input() messages: Message[] = new Array<Message>();
  currentUser: User;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.accountService.currentUser;
  }

}
