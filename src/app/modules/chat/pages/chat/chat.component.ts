import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Message } from "@chat/models/message";
import { MessageService } from "@chat/services/message.service";
import { SignalRService } from "@chat/services/signal-r.service";
import { AccountService } from "@core/services/account/account.service";
import { Friend } from "@shared/models/friend";
import { FriendService } from "src/app/modules/friends/services/friends.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @ViewChild('messagesContainer') messagesContainer: ElementRef;
  selectedFriend: Friend;
  messages: Message[] = new Array<Message>();

  constructor(
    private friendService: FriendService,
    private signalRService: SignalRService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.signalRService.startConnection();

    this.friendService.selectedFriend.subscribe(selectedFriend => {
      this.selectedFriend = selectedFriend;
    });
    this.messageService.$messages.subscribe(() => {
      this.scrollToBottom();
    })
  }
  scrollToBottom = () => {
    if (!this.messagesContainer) return;
    try {
      setTimeout(() => {
        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
      }, 50);
    } catch (err) {
      console.log(err);
    }
  }
}