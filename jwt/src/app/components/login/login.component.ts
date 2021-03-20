import { Component, OnInit } from '@angular/core';
import { CredentialModel } from 'src/app/model/credential-model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   credentials= new CredentialModel;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  OnSubmit() {
    console.log("Form is Submitted....");
    if ((this.credentials.email != '' && this.credentials.password != '') &&  (this.credentials.email != null && this.credentials.password != null))
    {

      this.loginService.generateToken(this.credentials).subscribe (
        (response:any)=>{
          this.loginService.loginUser(response.token);
          this.loginService.setUser(this.credentials.email);
          window.location.href="/dashboard";
        },
        error=>{
          console.log(error);
          console.log(error.error.error);
          alert ("Invalid Username or Password...");
        }
      )
    } else {
      console.log("Fields are Empty.....");

    }
  }
}
