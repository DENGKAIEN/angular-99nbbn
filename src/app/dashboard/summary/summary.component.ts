import { Component, OnInit } from '@angular/core';
import { DepositInstructionComponent } from '../../shared/deposit-instruction/deposit-instruction.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { resourceStockBalance } from '../../service/data';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  phyResources = resourceStockBalance;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  next(){
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DepositInstructionComponent, {
      width: '1200px',
      //height: '400px',
      data: {
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("result:", result);
      if(result){
        
      }
    });
  }

}
