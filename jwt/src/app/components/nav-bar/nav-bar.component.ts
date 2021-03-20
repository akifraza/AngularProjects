import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/model/credential-model'
import { UserdetailService } from 'src/app/services/userdetail.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public loggedIn = false;

  constructor(private loginService:LoginService, private userDetailService:UserdetailService) { }

  username:any = new User;

  ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn();
    if (this.loggedIn) {
      this.userDetailService.getUserDetail().subscribe(
        user=>{
          console.log(user)
          this.username = user
        },
        error=>{
          console.log(error);

        }
      )
    }
  }

  logoutUser() {
    this.loginService.logout()
    location.reload();
  }



}
