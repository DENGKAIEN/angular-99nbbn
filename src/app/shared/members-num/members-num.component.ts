import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
export interface DialogData {
  num: number
}
@Component({
  selector: 'app-members-num',
  templateUrl: './members-num.component.html',
  styleUrls: ['./members-num.component.scss']
})
export class MembersNumComponent implements OnInit {
  numOfMembers;
  constructor(
    public dialogRef: MatDialogRef<MembersNumComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.numOfMembers = data.num;
  }

  ngOnInit() {
  }

}
