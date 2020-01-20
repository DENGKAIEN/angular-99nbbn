import { product } from './../../service/pic';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../../service/shopping-cart.service';
import { resourceStockBalance, deliveryDetails, pickupDetails } from '../../service/data'
@Component({
  selector: 'app-physicalresources',
  templateUrl: './physicalresources.component.html',
  styleUrls: ['./physicalresources.component.scss']
})
export class PhysicalresourcesComponent implements OnInit {
  pickup:any = 'delivery';
  subscribers;
  phyResources = resourceStockBalance;
  deliveryDetails = deliveryDetails;
  dateNow = new Date();
  dateTime = new Date();
  pickupDetails = pickupDetails;
  constructor(private router: Router, private shoppingCartService: ShoppingCartService) { 
    this.dateTime.setHours(8);
    this.dateTime.setMinutes(0);
    //this.subscribers = this.shoppingCartService.getsubscribers();
    //this.getPhysicalResources();
  }

  ngOnInit() {
  }

  getPhysicalResources(){
    let ps = {};
    for(let su of this.subscribers){
      let skuCode = su.product.config.skuCode;
      if(ps[skuCode]==null){
        ps[skuCode] = {};
        ps[skuCode].qty = 0;
        ps[skuCode].resourceType = 'Handset';
        ps[skuCode].resourceName = 'Handset';
        ps[skuCode].skuCode = skuCode;
        ps[skuCode].skuName = su.product.detail.name+'('+su.product.config.color+')';
        ps[skuCode].avaQty = 12;
      }
      ps[skuCode].qty++;

      for(let sb of su.subscribers){
        let simSkuCode = sb.sim.skuCode;
        if(simSkuCode){
          if(ps[simSkuCode]==null){
            ps[simSkuCode] = {};
            ps[simSkuCode].qty = 0;
            ps[simSkuCode].resourceType = 'Sim Card';
            ps[simSkuCode].resourceName = 'C-SIM';
            ps[simSkuCode].skuCode = simSkuCode;
            ps[simSkuCode].skuName = sb.sim.type;
            ps[simSkuCode].avaQty = 543;
          }
          ps[simSkuCode].qty++;
        }
      }
      
    }
    console.log('ps:',ps);
    for(let prop in ps){
      console.log('prop:',prop);
      this.phyResources.push(ps[prop]);
    }
    console.log('phyResources:',this.phyResources);
  }

  next(){
    this.router.navigate(['dashboard/document']);
  }

}
