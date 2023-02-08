import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SignUpCommand } from 'src/app/core/cqrs/commands/account/sign-up-command';
import { AccountService } from 'src/app/core/services/account/account.service';
import { RedirectService } from 'src/app/core/services/redirect.service';

@Component({
  selector: 'app-register',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SingUpComponent implements OnInit {
  signupForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl('')
  })

  constructor(
    private redirect: RedirectService,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
  }

  signup() {
    let signupCommand = this.signupForm.value as SignUpCommand;
    this.accountService.signUp(signupCommand).subscribe(() => {
      // successful message
      this.redirect.redirectLogin();
    });
  }
  redirectLogin() {
    this.redirect.redirectLogin();
  }
}
