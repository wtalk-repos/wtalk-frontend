import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TokenService } from '../services/account/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    
    constructor(private tokenService: TokenService, private router: Router) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        let token = this.tokenService.getAccessToken();
        if (token) {
            request = this.addTokenToRequestHeader(request, token);
        }

        return next.handle(request).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse && error.status === 401) {
                return this.handle401Error(request, next, error);
            } else {
                return throwError(error);
            }
        }));
    }

    private handle401Error(request: HttpRequest<any>, next: HttpHandler, error: any) {
        this.router.navigate(['']);
        return throwError(error);
    }

    private addTokenToRequestHeader(request: HttpRequest<any>, token: string) {
        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
}
