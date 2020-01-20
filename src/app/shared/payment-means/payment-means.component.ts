import { Component, OnInit, Inject } from '@angular/core';
import {  MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  detail: any;
}
@Component({
  selector: 'app-payment-means',
  templateUrl: './payment-means.component.html',
  styleUrls: ['./payment-means.component.scss']
})
export class PaymentMeansComponent implements OnInit {
  detail = {
    amount:'9555',
    type:'Credit Card',
    period:'12',
    isSameCard:true,
    name:'Chan Tai Man',
    docType:'HKID',
    docNum:'A123456(7)',
    cardType:'VISA',
    cardNum:'4111********1111',
    status:'Pending to pay'
  };
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { 
    this.detail = data.detail?{...data.detail}:this.detail;
    console.log('data.detail:',data.detail);
    console.log('this.detail:',this.detail);
  }

  save(){
    if(this.detail.type=='Tap & Go'||this.detail.type=='Cash'){
      this.detail = {...this.detail,...{period:null,
        isSameCard:null,
        name:null,
        docType:null,
        docNum:null,
        cardType:null,
        cardNum:null}} ;
    }else if(this.detail.type=='Credit Card'){
      this.detail.period = null;
    }
    return this.detail;
  }

  ngOnInit() {
  }

}
