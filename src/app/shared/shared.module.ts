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
import { AuthGuardService } from "./directives/auth.guard";


@NgModule({
    declarations: [
        UserIconComponent
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
    ],
    exports: [
        CommonModule,
        FormsModule,
        MatToolbarModule,
        MatIconModule,
        LayoutModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        ReactiveFormsModule,
        UserIconComponent
    ],
    providers: [
        AuthGuardService,
    ]
})
export class SharedModule { }

