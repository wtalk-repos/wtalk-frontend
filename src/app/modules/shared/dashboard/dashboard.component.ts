import { Component, OnInit } from '@angular/core';
import { RedirectService } from 'src/app/services/redirect.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private redirect: RedirectService
  ) { }

  ngOnInit(): void {
  }

  redirectLogin() {
    this.redirect.redirectLogin();
  }

}
