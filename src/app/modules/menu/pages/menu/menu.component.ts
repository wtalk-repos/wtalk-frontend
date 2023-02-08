import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DataStorageService } from 'src/app/core/services/data-storage/data-storage.service';
import { RedirectService } from 'src/app/core/services/redirect.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  sidenavContentStyle: any;
  showSidenav: boolean = true;
  
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private dataStorage: DataStorageService,
  ) {
    this.sidenavContentStyle = {
      height: (window.innerHeight - 64).toString() + 'px',
      overflow: 'auto',
    };
  }

  ngOnInit(): void {

  }

  signOut() {
    this.dataStorage.clearAllData();
    this.router.navigate(['signin']);
  }

}
