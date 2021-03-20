import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { SignupData } from 'src/app/models/credentials-model';
import { RegistrationService } from '../../services/registration.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public registered = false;

  constructor(private resigtrationService:RegistrationService,private snak:MatSnackBar, private act:AppComponent) { }

  signupData = new SignupData;

  ngOnInit(): void {

  }

  OnSubmit() {
    console.log("Form is Submitted...");
    if ((this.signupData.email != null && this.signupData.fullusername != null && this.signupData.password != null ) && (this.signupData.email != '' && this.signupData.fullusername != '' && this.signupData.password != '')) {
      this.resigtrationService.registerUserDetail(this.signupData).subscribe (
        (reponse:any)=> {
          console.log(reponse);
          this.snak.open ("Account Registered Successfully","OK");
          this.registered = true
        },
        (error)=>{
          console.log(error);
        }

      )

    } else {

      this.snak.open ("Empty Fields are not allowed","OK");
    }

  }

}
