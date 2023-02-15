import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '@chat/models/message';
import { ConfigurationService } from '@core/services/configuration/configuration.service';
import { AbstractCRUDService } from '@shared/services/abstract-crud.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MessageService extends AbstractCRUDService<Message>{
    private _messages = new Array<Message>();

    $messages: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>(this._messages);

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
        this._messages = messages;
        this.$messages.next(messages);
    }
}
