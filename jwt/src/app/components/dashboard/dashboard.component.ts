import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserdetailService } from 'src/app/services/userdetail.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userDetailService:UserdetailService,private loginService:LoginService) { }

  ngOnInit(): void {
  }

  getUserDetail(){
    this.userDetailService.getUserDetail().subscribe (
      user=>{
        console.log(user);
      },
      error=>{
        console.log(error.error.error);
        if (error.error.error==="Unauthorized")
        {
          this.loginService.logout();
          window.location.href="/login";
        }
      }

    )
  }

}
