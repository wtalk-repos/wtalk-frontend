import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/core/services/account/account.service';


@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(
    public accountService: AccountService,
    public router: Router) { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (!this.accountService.isTokenValid) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const user = this.accountService.currentUser;

    if (!this.accountService.isTokenValid) {
      return false;
    }

    if (route.data.role && route.data.role != user.role) {
      // role not authorised so redirect to landing
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}