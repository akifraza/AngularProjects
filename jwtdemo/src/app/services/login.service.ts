import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientHelper } from 'src/app/Helper/http-client-helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor (private http:HttpClient) { }

  generateToken(credentials:any) {
    return this.http.post (`${HttpClientHelper.baseURL}/token`,credentials)
  }

  loginUser(cbstoken) {
    localStorage.setItem ("cbstoken",cbstoken)
    return true
  }

  isLoggedIn () {
    let cbstoken = localStorage.getItem("cbstoken")
    if (cbstoken==undefined || cbstoken==='' || cbstoken==null) {
      return false
    } else {
      return true
    }
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('cbstoken');
    return true;
  }

  getToken () {
    return localStorage.getItem('cbstoken');
  }

  setUser(username:any) {
    localStorage.setItem("username",username);
  }
  getusername() {
    return localStorage.getItem('username');
  }
}
