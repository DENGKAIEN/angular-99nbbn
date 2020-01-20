import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { engagementResponse as engage } from '../../service/data'

@Component({
  selector: 'app-update-engagement',
  templateUrl: './update-engagement.component.html',
  styleUrls: ['./update-engagement.component.scss']
})
export class UpdateEngagementComponent implements OnInit {
  engagementResponse = engage;
  constructor() { }

  ngOnInit() {
  }

  returnResponse(){
    let r = this.engagementResponse.filter(item=>item.engagementResponse=='no');
    //console.log('r:',r);
    return r;
  }
}
