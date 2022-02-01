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

 
  redirectRegister () {
    this.redirect.redirectRegister();
  }

  redirectForgot() {
    this.redirect.redirectForgot();
  }
}
