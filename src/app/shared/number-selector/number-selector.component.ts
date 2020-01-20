import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  selectedNum: number;
}
@Component({
  selector: 'app-number-selector',
  templateUrl: './number-selector.component.html',
  styleUrls: ['./number-selector.component.scss']
})
export class NumberSelectorComponent implements OnInit {
  numberList;
  selectedNum;
  constructor( public dialogRef: MatDialogRef<NumberSelectorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { 
      this.selectedNum = data.selectedNum;
      console.log(data.selectedNum);
  }

  ngOnInit() {
  }

  getNumList(){
    this.numberList = [61113452,61113453,61113454,61113455,61113456];
  }

}
