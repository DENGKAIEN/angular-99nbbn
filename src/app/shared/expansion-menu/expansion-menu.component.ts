import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-expansion-menu',
  templateUrl: './expansion-menu.component.html',
  styleUrls: ['./expansion-menu.component.scss']
})
export class ExpansionMenuComponent implements OnInit {
  @Input() category;
  @Output() choose = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  addSearchCriteria(item) {
    //let test = `{"${this.category.head.value}":{"key":"${item.key}","value":"${item.value}"}}`;
    let criteria = {head:this.category.head, item:item};
    this.choose.emit(criteria);
  }

}
