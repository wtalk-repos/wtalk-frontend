import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewIdResponse } from 'src/app/shared/api-responses/new-id-response';
import { ConfigurationService } from '../configuration/configuration.service';
import { User } from '@shared/models/user';
import { UserRole } from '@shared/enums/user-role';
import { SignInResponse } from '@core/responses/account/sign-in-response';
import { SignUpCommand } from '@core/cqrs/commands/account/sign-up-command';

@Injectable()
export class AccountService {
  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private jwtHelper: JwtHelperService,
    private configuration: ConfigurationService
  ) { }

  get isLoggedIn() {
    return !!localStorage.getItem('token');
  }
  get isTokenValid(): boolean {
    let accessToken = this.tokenService.getAccessToken();
    return !this.jwtHelper.isTokenExpired(accessToken);
  }

  _currentUser: User | undefined = undefined;
  get currentUser(): User {
    if (!this._currentUser) {
      let token = this.tokenService.getAccessToken();
      let tokenData = this.jwtHelper.decodeToken(token);
      console.log(tokenData);
      this._currentUser = new User(
        tokenData.UserId,
        tokenData.email,
        tokenData.role
      ); // TODO: get user roles
    }
    return this._currentUser;
  }

  signIn(username: string, password: string): Observable<SignInResponse> {
    let url = `${this.configuration.apiUrl}account/login`;
    return this.http
      .post<SignInResponse>(url, {
        username: username,
        password: password,
      })
      .pipe(
        map((signInResponse: SignInResponse) => {
          this.tokenService.setAccessToken(signInResponse.token);
          return signInResponse;
        })
      ) as Observable<SignInResponse>;
  }

  signUp(signUpCommand: SignUpCommand) {
    let url = `${this.configuration.apiUrl}account/register`;
    return this.http.post(url, signUpCommand) as Observable<NewIdResponse>;
  }

  logout(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      localStorage.clear();
      this._currentUser = undefined;
      resolve(true);
    });
  }

  isCurrentUserInRole(role: UserRole): boolean {
    return this.currentUser.role == role.toString();
  }
}
