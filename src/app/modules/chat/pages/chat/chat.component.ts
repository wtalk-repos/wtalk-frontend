import { Component, OnInit } from "@angular/core";
import { Friend } from "@shared/models/friend";
import { FriendService } from "src/app/modules/friends/services/friends.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  selectedFriend: Friend;

  constructor(
    private friendService: FriendService
  ) {
  }
  
  ngOnInit(): void {
    this.friendService.selectedFriend.subscribe(selectedFriend => {
      this.selectedFriend = selectedFriend;
    })
  }
}