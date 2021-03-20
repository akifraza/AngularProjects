import { Component } from '@angular/core';
// import alanBtn from '@alan-ai/alan-sdk-web';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'jwtdemo';

  // alanBtnInstance;

  // constructor(){
  //   this.alanBtnInstance = alanBtn({
  //     key: 'f586246f661ce0b808dd587b9900d0222e956eca572e1d8b807a3e2338fdd0dc/stage',
  //     onCommand: (commandData: { command: string }) => {
  //       console.log(commandData);
  //       if (commandData.command === 'register') {
  //         window.location.href="/registraion";

  //       }
  //       if (commandData.command === 'exiting') {
  //         window.location.href="/";

  //       }
  //     },
  //   });
  // }
  // public activate() {
  //   this.alanBtnInstance.activate();
  // }

  // public activateAndPlayText() {
  //   this.alanBtnInstance.activate().then(() => {
  //     this.alanBtnInstance.playText('Hi');
  //   });
  // }


}
