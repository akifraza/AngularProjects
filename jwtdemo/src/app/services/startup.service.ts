import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientHelper } from '../Helper/http-client-helper';



const httpOptions = {
  headers: new HttpHeaders({
                'responseType': 'array',
  })
};
@Injectable({
  providedIn: 'root'
})
export class StartupService {
  constructor (private http:HttpClient) { }

  startupApp(message:any) {
    return this.http.post (`${HttpClientHelper.baseURL}/test`,message)
  }
}
