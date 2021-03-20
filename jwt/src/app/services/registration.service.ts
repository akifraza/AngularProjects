import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientHelper } from '../Helper/http-client-helper';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  registerUserDetail(signupData:any) {
    return this.http.post(`${HttpClientHelper.baseURL}/register`,signupData);
  }

}
