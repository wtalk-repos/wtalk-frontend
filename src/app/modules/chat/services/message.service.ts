import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '@chat/models/message';
import { ConfigurationService } from '@core/services/configuration/configuration.service';
import { AbstractCrudRestService } from '@shared/services/abstract-command-rest.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MessageService extends AbstractCrudRestService<Message>{
    private _messages = new Array<Message>();

    $messages: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);

    constructor(
        private http: HttpClient,
        protected configuration: ConfigurationService
    ) {
        super(http, configuration, 'message', Message);
        this.$messages.subscribe(messages => {
            this._messages = messages;
        })
    }

    newMessage(message: Message) {
        this._messages.push(message)
        this.$messages.next(this._messages);
    }
    
    loadMessages(messages: Message[]) {
        this.$messages.next(messages);
    }
}
