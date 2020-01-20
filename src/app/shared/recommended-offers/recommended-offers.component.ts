
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import * as picture from '../../service/pic';
import { AppCommon } from '../../app.common';
export interface DialogData {
  product
}
@Component({
  selector: 'app-recommended-offers',
  templateUrl: './recommended-offers.component.html',
  styleUrls: ['./recommended-offers.component.scss']
})
export class RecommendedOffersComponent implements OnInit {
  @Input() product;
  @Input() showBtn:boolean = true;
  pic = picture;
  constructor(public dialog: MatDialog, private appCommon: AppCommon) { }
  @Output() addToCart = new EventEmitter();
  ngOnInit() {
  }
  add(){
    if(this.product.detail.type=='vas'){
      this.addToCart.emit(this.appCommon.copy(this.product));
    }else{
      this.openDialog();
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddToCartComponent, {
      width: '850px',
      height:'100%',
      data: {
        product: this.appCommon.copy(this.product)
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("product:",result);
      if(result){
        this.addToCart.emit(result);
      }  
    });
  }

}

