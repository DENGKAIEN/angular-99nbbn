import { Component, OnInit } from '@angular/core';
import { recommendedOffer as rc, otherRecom, clrecom, vasrecom as vrc, engagementResponse as er } from '../service/data';
import * as picture from '../service/pic';
import { ShoppingCartService } from '../service/shopping-cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { categoryForCustomer as cate, vascategories as vcate } from '../service/data';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppCommon } from '../app.common';
import {MatFormFieldControl} from '@angular/material/form-field';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  pic = picture;
  criteria = [];
  basicFilter: any;
  groupProduct: any;
  isvas: any;
  id: any;
  categoryForCustomer: any;
  recom=rc;
  otrecom: any;
  clubrecom: any;
  vasrecom: any;
  engagementResponse = er;

  constructor(private router: Router, private shoppingCartService: ShoppingCartService, private route: ActivatedRoute, private _snackBar: MatSnackBar, private appCommon: AppCommon, public dialog: MatDialog) { }

  ngOnInit() {
    this.otrecom = otherRecom;
    this.clubrecom = clrecom;
    this.route.params.subscribe(params => {
      this.isvas = params.isvas;
      this.id = params.id;
      
      if(this.isvas == 'Y'){
        this.categoryForCustomer = this.appCommon.copy(vcate);
       
      }else{
        this.categoryForCustomer = this.appCommon.copy(cate);
        
      }  
    });
    
  }

}
