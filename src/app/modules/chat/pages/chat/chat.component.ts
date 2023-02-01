import { Component, OnInit } from "@angular/core";
import { Message } from "@chat/models/message";
import { AccountService } from "@core/services/account/account.service";
import { Friend } from "@shared/models/friend";
import { FriendService } from "src/app/modules/friends/services/friends.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  selectedFriend: Friend;
  messages: Message[] = new Array<Message>();

  constructor(
    private friendService: FriendService,
    private accountService: AccountService
  ) {
  }

  ngOnInit(): void {
    this.friendService.selectedFriend.subscribe(selectedFriend => {
      this.selectedFriend = selectedFriend;
    });

    for (let i = 0; i < 100; i++) {
      this.messages.push({
        friend: this.selectedFriend,
        text: 'Lorem ipsum '
      })
    }
    this.messages.push({
      friend: this.accountService.currentUser,
      text: 'Lorem ipsum '
    })
  }
}