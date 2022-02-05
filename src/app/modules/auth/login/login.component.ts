import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RedirectService } from 'src/app/services/redirect.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private redirect: RedirectService
  ) { }

  ngOnInit(): void {
    window.localStorage.clear();
  }

  onSubmit() {
    setTimeout(() => {
      let token = this.createToken()
      localStorage.setItem('token', token)
      this.redirect.redirectDashboard();
    }, 500)
  }
 
  redirectRegister () {
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
