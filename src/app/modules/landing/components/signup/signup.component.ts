import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RedirectService } from 'src/app/core/services/redirect.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class SingUpComponent implements OnInit {
  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl('')
  })

  constructor(
    private redirect: RedirectService
  ) { }

  ngOnInit(): void {
  }

  redirectLogin() {
    this.redirect.redirectLogin();
  }
}
