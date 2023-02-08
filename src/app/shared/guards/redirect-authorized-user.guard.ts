import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AccountService } from '@core/services/account/account.service';
import { Observable } from 'rxjs';



@Injectable()
export class RedirectAuthorizedUser implements CanActivate {
    constructor(
        public accountService: AccountService,
        public router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.accountService.isTokenValid) {
            let relativePath = route.data.redirectAuthorizedTo ?? '/menu/chat';
            this.router.navigate([relativePath]);
        }
        return true;
    }
}