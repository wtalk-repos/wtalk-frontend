import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AccountService } from 'src/app/core/services/account/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor (
    private accountService: AccountService,
    private router: Router
    ) 
  {}

  canActivate(): boolean {
    if (this.accountService.loggedIn()) {
      return true;
    }
    else {
      console.log('izbacen')
      this.router.navigate(['login']);
      return false;
    }
  }
}
