import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  currencyExample = 125;
  dateString:Date;
  if (dateString) {
    const newDate = new Date(this.dateString);
  }


}
