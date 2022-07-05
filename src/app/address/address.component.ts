import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private ser:ServicesService) { }
  goToOrders(){
    this.ser.goToOrders();
  }
  ngOnInit(): void {
  }

}
