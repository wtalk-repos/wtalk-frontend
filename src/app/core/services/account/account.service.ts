import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(

  ) { }
  
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  signIn() {

  }

  signUp() {

  }
}
