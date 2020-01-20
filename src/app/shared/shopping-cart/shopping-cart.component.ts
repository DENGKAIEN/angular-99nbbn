import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router, ParamMap } from '@angular/router';
import { ShoppingCartService } from '../../service/shopping-cart.service';
import * as picture from '../../service/pic';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  subscribers;
  upfrontTotal;
  pic = picture;
  constructor(private router: Router, private shoppingCartService:ShoppingCartService) { 
    this.subscribers = this.shoppingCartService.getsubscribers();
  }
  ngOnInit() {
  }
  config(id:any, type?:any, gsId?:any){
    let test  = {...{ sid: id },...(type==undefined?{}:{configType:type}),...(gsId==undefined?{}:{gsId:gsId})};
    let param = ['dashboard/config',test];
    this.router.navigate(param);
  }

  remove(id:any){
    console.log(id)
    this.shoppingCartService.removeFromCart(id);
    this.subscribers = this.shoppingCartService.getsubscribers();
  }

  removeVas(vasId:any){
    this.shoppingCartService.removeVas(vasId);
  }

  removeGroupSubscriber(sid,gsId){
    this.shoppingCartService.removeGroupSubscriber(sid,gsId);
  }

  vas(id:any){
    let param = {...{isvas:'Y',id:id}};
    this.router.navigate(['dashboard/offerselection',param]);
  }
  checkout(){
    console.log('this.subscribers:',this.subscribers);
    this.router.navigate(['dashboard/payment']);
  }

  getUpfrontTotal(){
    this.shoppingCartService.getUpfrontTotal();
  }

}
