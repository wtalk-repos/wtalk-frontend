import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Message } from '@chat/models/message';
import { AccountService } from '@core/services/account/account.service';
import { User } from '@shared/models/user';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatBubbleComponent implements OnInit {
  @Input() message: Message;
  currentUser: User;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.accountService.currentUser
  }

}
