import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { JwtHelperService, JWT_OPTIONS } from "@auth0/angular-jwt";
import { TokenInterceptor } from "./interceptors/token-interceptor";
import { AccountService } from "./services/account/account.service";
import { TokenService } from "./services/account/token.service";
import { DataStorageService } from "./services/data-storage/data-storage.service";

@NgModule({
    exports: [HttpClientModule],
    providers: [
        AccountService,
        TokenService,
        DataStorageService,
        JwtHelperService,
        {
            provide: JWT_OPTIONS,
            useValue: JWT_OPTIONS
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },]
})
export class CoreModule {
}