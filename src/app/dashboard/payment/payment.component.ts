import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../../service/shopping-cart.service';
import { relationship, upfrontPaymentInformation } from '../../service/data'
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  basicInfo;
  relationship = relationship;
  upfrontPaymentInformation = upfrontPaymentInformation;
  constructor(private router: Router, private shoppingCartService: ShoppingCartService) {
    this.basicInfo = this.shoppingCartService.getBasicInfo()
  }

  ngOnInit() {
  }

  next() {
    this.router.navigate(['dashboard/physicalresources']);
  }

}
