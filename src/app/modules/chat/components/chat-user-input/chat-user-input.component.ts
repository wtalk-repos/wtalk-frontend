import { Component, OnInit } from '@angular/core';
import { Message } from '@chat/models/message';
import { MessageService } from '@chat/services/message.service';
import { SignalRService } from '@chat/services/signal-r.service';
import { AccountService } from '@core/services/account/account.service';
import { NewIdResponse } from '@shared/api-responses/new-id-response';
import { Friend } from '@shared/models/friend';
import { Observable, Subscription } from 'rxjs';
import { FriendService } from 'src/app/modules/friends/services/friends.service';

@Component({
  selector: 'app-chat-user-input',
  templateUrl: './chat-user-input.component.html',
  styleUrls: ['./chat-user-input.component.scss']
})
export class ChatUserInputComponent implements OnInit {
  messageText: string;
  selectedFriend: Friend;
  constructor(
    private messageService: MessageService,
    private friendService: FriendService,
    private accountService:AccountService,
  ) { }

  ngOnInit(): void {
    this.friendService.selectedFriend.subscribe(selectedFriend => this.selectedFriend = selectedFriend);
  }

  sendMessage() {
    if (!this.selectedFriend || !this.selectedFriend.id) {
      return;
    }
    if (!this.messageText) {
      return;
    }
    let message = new Message({
      sender:this.accountService.currentUser,
      senderId:this.accountService.currentUser.id,
      receiver: this.selectedFriend,
      receiverId: this.selectedFriend.id,
      text: this.messageText
    });
    this.messageService.addOne(message).subscribe((newMessageResponse: NewIdResponse) => {
      message.id = newMessageResponse.id as number;
      this.messageService.newMessage(message);
    });
  }

  onKeyDown(e: KeyboardEvent) {
    if (e.ctrlKey && e.key == "Enter") {
      // TODO new line
      return;
    }
    if (e.key == "Enter") {
      this.sendMessage();
      this.messageText = '';
    }
  }
}
