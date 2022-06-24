import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import RefreshTokenCommand from "../../cqrs/commands/account/refresh-token-command";
import GetRefreshTokenQuery from "../../cqrs/commands/account/refresh-token-command";
import RefreshTokenResponse from "../../responses/account/refresh-token-response";
import { ConfigurationService } from "../configuration/configuration.service";

@Injectable()
export class TokenService{
    constructor(
        private httpClient:HttpClient,
        private configuration:ConfigurationService
    ){

    }
    getAccessToken():string{
        return localStorage.getItem('accessToken') as string;
    }

    setRefreshToken(token:string){
        return localStorage.setItem('refreshToken',token);
    }

    getRefreshToken():string{
        return localStorage.getItem('refreshItem') as string;
    }

    setAccessToken(token:string){
        return localStorage.setItem('accessToken',token);
    }
    
    refreshToken(refreshTokenCommand:RefreshTokenCommand):Observable<RefreshTokenResponse>{
        return this.httpClient.post<RefreshTokenResponse>(this.configuration.apiUrl+'/api/account/refresh-token',refreshTokenCommand);
    }
}