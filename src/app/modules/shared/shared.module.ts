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
import { AuthGuard } from "./directives/auth.guard";


@NgModule({
    declarations: [

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
        HttpClientModule
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
        HttpClientModule
    ],
    providers: [
        AuthGuard,
        JwtHelperService,
        {
            provide: JWT_OPTIONS,
            useValue: JWT_OPTIONS
        },
        TokenService
    ]
})
export class SharedModule { }

