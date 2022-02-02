import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  constructor(
    private router: Router
  ) { }

  redirectLogin() {
    this.router.navigate(['login']);
  }

  redirectRegister() {
    this.router.navigate(['register']);
  }

  redirectForgot() {
    this.router.navigate(['forgot-password']);
  }

  redirectDashboard() {
    this.router.navigate(['dashboard']);
  }

  redirectMainNav () {
    this.router.navigate(['main-nav']);
  }
}
