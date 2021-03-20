import { StartupService } from './../../services/startup.service';
import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/credentials-model';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = new Message;


  constructor(private saymes:StartupService) { }

  ngOnInit(): void {
    this.speech();
  }
  speech() {
    this.message.textToConvert = "Hi This is Startup Application. Isnt it wonderfull that your application will talk to you";
    this.saymes.startupApp(this.message)
    .subscribe((response) => {
      console.log("res: ",response);
    },
    error=>{console.log("Error: ",error);
    });

  }
}
