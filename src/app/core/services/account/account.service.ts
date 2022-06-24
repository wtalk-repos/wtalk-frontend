import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import UserCredentials from '../../cqrs/commands/account/sign-in-command';
import SignUpCommand from '../../cqrs/commands/account/sign-up-command';
import { JwtHelperService } from '@auth0/angular-jwt';

import User from '../../models/account/user';

import SignInResponse from '../../responses/account/sign-in-response';
import { ConfigurationService } from '../configuration/configuration.service';
import { TokenService } from './token.service';

@Injectable()
export class AccountService {

  user: User; //current user

  constructor(
    private http: HttpClient,
    private configuration: ConfigurationService,
    private jwtHelper: JwtHelperService,
    private tokenService: TokenService
  ) { }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  signIn(userCredentials: UserCredentials): Observable<SignInResponse> {
    let url = `${this.configuration.apiUrl}/account/signin`;
    return this.http.post<SignInResponse>(url, userCredentials).pipe(
      map((signInResponse: SignInResponse) => {
        console.log(signInResponse);
        return signInResponse
      })) as Observable<SignInResponse>;
  }

  signUp(signUpCommand: SignUpCommand) {
    let url = `${this.configuration.apiUrl}/account/signup`;
    return this.http.post(url, signUpCommand) as Observable<SignUpCommand>;
  }

  isUserAuthenticated(): boolean {
    let accessToken = this.tokenService.getAccessToken();
    return !this.jwtHelper.isTokenExpired(accessToken);
  }

}
