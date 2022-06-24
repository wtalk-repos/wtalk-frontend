import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import UserCredentials from 'src/app/core/cqrs/commands/account/sign-in-command';
import { AccountService } from 'src/app/core/services/account/account.service';
import { RedirectService } from 'src/app/core/services/redirect.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private redirect: RedirectService,
    private accountService: AccountService,
    private router:Router
  ) { }

  ngOnInit(): void {

  }

  redirectRegister() {
    this.redirect.redirectRegister();
  }

  redirectForgot() {
    this.redirect.redirectForgot();
  }

  randomNumber() {
    return Math.random().toString(36).substr(2); // remove `0.`
  }

  createToken() {
    return this.randomNumber() + this.randomNumber(); // to make it longer
  }

  signIn() {
    let userCredentials = new UserCredentials();
    userCredentials.email = this.loginForm.value.email;
    userCredentials.password = this.loginForm.value.password;
    this.accountService.signIn(userCredentials).subscribe(()=>{
      this.router.navigate(['dashboard','chat'])
    });
  }
}
