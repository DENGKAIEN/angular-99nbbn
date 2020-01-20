import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../service/shopping-cart.service';
import { PaymentMeansComponent } from '../payment-means/payment-means.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deposit-instruction',
  templateUrl: './deposit-instruction.component.html',
  styleUrls: ['./deposit-instruction.component.scss']
})
export class DepositInstructionComponent implements OnInit {
  instructions = [];
  constructor(private shoppingCartService:ShoppingCartService, public dialog: MatDialog) { 
    this.shoppingCartService.getUpfrontTotal();
  }

  add(){
    this.openDialog();
  }
  edit(instruction,i){
    this.openDialog(instruction,i);
  }
  remove(i){
    this.instructions = this.instructions.filter((item,index)=>index!=i);
  }
  openDialog(instruction?,i?): void {
    const dialogRef = this.dialog.open(PaymentMeansComponent, {
      width: '1200px',
      height: '400px',
      data: {
        detail:instruction
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("result:", result);
      if(result){
        if(instruction){
          this.instructions[i] = result;
        }else{
          this.instructions.push(result);
        }
      }
      console.log("this.instructions:", this.instructions);
    });
  }

  ngOnInit() {
  }

}
