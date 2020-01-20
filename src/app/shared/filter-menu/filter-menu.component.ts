import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.scss']
})
export class FilterMenuComponent implements OnInit {
  @Output() search = new EventEmitter();
  @Input() categories;
  criteria = [];
  constructor() { }

  ngOnInit() {
  }
  removeSearchCriteria(c) {
    this.criteria = this.criteria.filter((cr) => cr.head.key != c.head.key);
    this.categories = this.categories.map((ca) => {
      if (ca.head.key == c.head.key) {
        ca.isShow = true;
      } else if (ca.parentKey == c.head.key) {
        ca.isShow = false;
      }
      return ca;
    });
    this.search.emit(this.criteria);
  }
  addSearchCriteria(c) {
    //let newCriteeia = JSON.parse();
    console.log('addSearchCriteria:', c);
    let match = this.criteria.find((cr) => cr.head.key == c.head.key);
    if (match == null || match == undefined) {
      this.criteria.push(c);
    } else {
      this.criteria = this.criteria.map((cr) => {
        if (cr.head.key == c.head.key) {
          return c;
        } else {
          return cr
        }
      }
      );
    }
    this.categories = this.categories.map((ca) => {
      if (ca.head.key == c.head.key) {
        ca.isShow = false;
      } else if (ca.parentKey == c.head.key) {
        ca.isShow = true;
      }
      return ca;
    });
    this.search.emit(this.criteria);
  }
  getCriteriaByKey(key) {
    let c = this.criteria.find((c) => c.key == key);
    if (c != null && c != undefined) {
      return c;
    } else {
      return null;
    }
  }
  isShown(c) {
    if (c.parentKey != null && c.parentKey != undefined) {
      if (this.getCriteriaByKey(c.parentKey) != null) {
        return true;
      } else {
        return false;
      }
    } else {
      if (this.getCriteriaByKey(c.head.key) != null) {
        return false;
      } else {
        return true;
      }
    }
  }

}
