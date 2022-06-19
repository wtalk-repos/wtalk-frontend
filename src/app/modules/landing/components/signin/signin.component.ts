import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RedirectService } from 'src/app/core/services/redirect.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private redirect: RedirectService
  ) { }

  ngOnInit(): void {
    window.localStorage.clear();
    console.log('ovo')
  }

  onSubmit() {
    let token = this.createToken()
    localStorage.setItem('token', token)
    console.log('ovo se desi')
    this.redirect.redirectDashboard();
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
}
