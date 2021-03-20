import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientHelper } from '../Helper/http-client-helper';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})


export class UserdetailService {

  constructor(private http:HttpClient, private loginService:LoginService) { }

  getUserDetail() {
    return this.http.get(`${HttpClientHelper.baseURL}/getuserdetails/${this.loginService.getusername()}`,httpOptions);
  }
}
