import { LayoutModule } from "@angular/cdk/layout";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { JwtHelperService, JWT_OPTIONS } from "@auth0/angular-jwt";
import { TokenService } from "src/app/core/services/account/token.service";
import { UserIconComponent } from './components/user-icon/user-icon.component';
import { AuthGuardService } from "./guards/auth.guard";
import { RedirectAuthorizedUser } from "./guards/redirect-authorized-user.guard";
import { SearchFriendsComponent } from './components/search-friends/search-friends.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCommonModule } from "@angular/material/core";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
    declarations: [
        UserIconComponent,
        SearchFriendsComponent,
        SearchBarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatToolbarModule,
        MatIconModule,
        LayoutModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        MatToolbarModule,
        MatIconModule,
        LayoutModule,
        ReactiveFormsModule,
        UserIconComponent,
        MatCommonModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatDialogModule,
        MatProgressSpinnerModule
    ],
    providers: [
        AuthGuardService,
        RedirectAuthorizedUser
    ],
    entryComponents:[
        SearchFriendsComponent
    ]
})
export class SharedModule { }

