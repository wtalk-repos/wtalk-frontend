import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import UserCredentials from '../../commands/account/sign-in-command';
import SignUpCommand from '../../commands/account/sign-up-command';

import SignInResponse from '../../responses/account/sign-in-response';
import { ConfigurationService } from '../configuration/configuration.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private _http: HttpClient,
    private _configuration: ConfigurationService
  ) { }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  signIn(userCredentials: UserCredentials): Observable<SignInResponse> {
    let url = `${this._configuration.apiUrl}/account/signin`;
    return this._http.post<SignInResponse>(url, userCredentials).pipe(
      map((signInResponse: SignInResponse) => {
        console.log(signInResponse);
        return signInResponse
      })) as Observable<SignInResponse>;
  }

  signUp(signUpCommand: SignUpCommand) {
    let url = `${this._configuration.apiUrl}/account/signup`;
    return this._http.post(url, signUpCommand) as Observable<SignUpCommand>;
  }
}
