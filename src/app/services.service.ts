import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private router:Router) { }
  goTocart():any{
    this.router.navigate(['/','cart']);
  }
  goToOrders():any{
    this.router.navigate(['/','orders']);
  }
}
