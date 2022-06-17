import { LayoutModule } from "@angular/cdk/layout";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";


@NgModule({
    declarations: [

    ],
    imports: [
        BrowserModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        MatIconModule,
        LayoutModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule
    ]
})
export class SharedModule { }

