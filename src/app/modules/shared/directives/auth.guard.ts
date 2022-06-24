import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import RefreshTokenCommand from 'src/app/core/cqrs/commands/account/refresh-token-command';
import GetRefreshTokenQuery from 'src/app/core/cqrs/commands/account/refresh-token-command';
import { AccountService } from 'src/app/core/services/account/account.service';
import { TokenService } from 'src/app/core/services/account/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private accountService: AccountService,
    private router: Router,
    private tokenService: TokenService) { }

  async canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree | Observable<boolean | UrlTree>> {

    if (this.accountService.isUserAuthenticated() && this.accountService.user) {
      let refreshTokenCommand = new RefreshTokenCommand();
      var refreshTokenResponse = await this.tokenService.refreshToken(refreshTokenCommand).toPromise()
      refreshTokenCommand.refreshToken = refreshTokenResponse.refreshToken;
      refreshTokenCommand.userId = this.accountService.user.id;

      return this.tokenService.refreshToken(refreshTokenCommand).pipe(map((data) => {
        return true;
      }), catchError(
        (e: any) => {
          this.router.navigate(['signin']);
          return throwError(e);
        })) as Observable<boolean>;


    }
    this.router.navigate(['signin']);
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const user = this.accountService.user;
    if (this.accountService.isUserAuthenticated() == false) {
      let refreshTokenCommand = new RefreshTokenCommand();
      refreshTokenCommand.refreshToken = this.tokenService.getRefreshToken();
      refreshTokenCommand.userId = this.accountService.user?.id;
      return this.tokenService.refreshToken(refreshTokenCommand).pipe(map((data) => {
        if (route.data.roles && route.data.roles.some((r: any) => user.roles.indexOf(r) >= 0) == false) {

          // role not authorised so redirect to home page
          this.router.navigate(['/']);
          return false;
        }
        return true;
      }), catchError((e: any) => {
        this.router.navigate(['signin']);
        return throwError(e);
      })) as Observable<boolean>;

    }

    if (route.data.roles && route.data.roles.some((r: any) => user.roles.indexOf(r) >= 0) == false) {
      // role not authorised so redirect to home page
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
