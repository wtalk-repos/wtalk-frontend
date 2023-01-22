import { Component, OnInit } from '@angular/core';
import { RedirectService } from 'src/app/core/services/redirect.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private redirect: RedirectService
  ) { }

  ngOnInit(): void {
  }

  redirectLogin() {
    this.redirect.redirectLogin();
  }
}
