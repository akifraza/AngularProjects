import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';

import { LoginService } from './login.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginService:LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let req = request;
    let token = this.loginService.getToken();

    // console.log("INTERCEPTOR:",token);
    if (token!=null)
    {
        // console.log ("Before Token:",newReq)
        //  newReq=newReq.clone({setHeaders:{'Authorization': `Bearer ${token}`}})
        //console.log(token);
      
        req = req.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        req = req.clone({ headers: request.headers.set('Accept', 'application/json') });
        req = req.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
 
        
        //console.log("new Req:", req);
    }
    return next.handle(req);
  }
}
export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
