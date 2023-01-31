import { Component, Input, OnInit } from '@angular/core';
import { Friend } from '@shared/models/friend';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent implements OnInit {
  @Input() friend: Friend;

  constructor() { }

  ngOnInit(): void {
  }

}
