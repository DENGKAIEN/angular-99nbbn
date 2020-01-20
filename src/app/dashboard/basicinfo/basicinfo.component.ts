import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ShoppingCartService } from '../../service/shopping-cart.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css']
})
export class BasicinfoComponent implements OnInit {
  //basicInfo:any;
  basicInfo = this.fb.group({
    orderNo: [{value:'',disabled:true}],
    orderNature: [{value:'',disabled:true}],
    usage: [''],
    documentType: [''],
    documentNum: [''],
    customerName: [{value:'',disabled:true}],
    prefix: [''],
    num: [''],
    contactFixedLineNum: [''],
    contactEmailAddress: [''],
    clubMembershipId: [''],
    staffNum: [{value:'',disabled:true}],
    staffName: [{value:'',disabled:true}],
    contactNum: [''],
    referrer: [''],
    referrerName: [{value:'',disabled:true}],
    arr: [['']]
  });
  constructor(private http: HttpClient,private fb: FormBuilder, private router: Router, private shoppingCartService: ShoppingCartService,private _snackBar: MatSnackBar) {
  }
  openSnackBar() {
    this._snackBar.open('test','', {
      duration: 1500,
    });
  }
  t(error: HttpErrorResponse){console.log('error2:',error);return throwError(
    'Something bad happened; please try again later.');}
  ngOnInit() {
    this.basicInfo.patchValue(this.shoppingCartService.getBasicInfo());
  }

  next() {
    console.log('this.basicInfo:',this.basicInfo);
    this.shoppingCartService.saveBasicInfo(this.basicInfo.getRawValue());
    this.router.navigate(['dashboard','offerselection']);
  }
}
