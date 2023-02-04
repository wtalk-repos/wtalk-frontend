import { Injectable } from '@angular/core';
import { HubConnection } from "@microsoft/signalr";
import { HubConnectionBuilder } from '@microsoft/signalr/dist/esm/HubConnectionBuilder';
import { IHttpConnectionOptions } from '@microsoft/signalr/dist/esm/IHttpConnectionOptions';
import { AccountService } from '@core/services/account/account.service';
import { TokenService } from '@core/services/account/token.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class SignalRService {
  public hubConnection: HubConnection;

  startConnection = () => {
    const options: IHttpConnectionOptions = {
      accessTokenFactory: () => {
        return this.tokenService.getAccessToken();
      }
    }
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(environment.chatSignalEndpoint, options)
      .withAutomaticReconnect()
      .build()

    this.hubConnection.start()
      .then(() => {
        console.log('Connection started')
      }).catch(err => console.log(`Error:${err}`))

    this.hubConnection.onclose(() => {

    });
  }

  stopConnection = () => {
    this.hubConnection.stop().then(() => {
      this.hubConnection.stop().then(() => {
        console.log('Connection stopped')
      })
    })
  }
  constructor(
    private tokenService: TokenService
  ) { }

}
