import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Gregory Doud";
  address: string = "4900 Parkway Dr.";
  city: string = "Mason";
  state: string = "Ohio";
  zip: string = "45040";
  phone: string = "513-322-8888";
  email: string = "gdoud@maxtrain.com";



}

