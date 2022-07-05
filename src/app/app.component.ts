import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mycart';
  constructor(private ser:ServicesService){}
  goTocart(){
    this.ser.goTocart();
  }
  goToOrders(){
    this.ser.goToOrders();
  }
}
