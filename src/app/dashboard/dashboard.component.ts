import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart, RouterEvent } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items;
  activeIndex: number = 0;
  hideCart = false;
  constructor(private router: Router, private route: ActivatedRoute,private _snackBar: MatSnackBar) {

  }
openSnackBar() {
    this._snackBar.open('test','', {
      duration: 1500,
    });
  }
  ngOnInit() {
    this.activeIndex = this.route.firstChild?this.route.firstChild.snapshot.data['activeIndex']:0;
    this.hideCart = this.route.firstChild.snapshot.data['hide'];
    let t = this.router.events.pipe(filter((event:RouterEvent): event is NavigationEnd =>event instanceof NavigationEnd));
    t.subscribe(event => {
      this.activeIndex = this.route.firstChild?this.route.firstChild.snapshot.data['activeIndex']:0;
      this.hideCart = this.route.firstChild.snapshot.data['hide'];
    });
    this.items = [{
      label: 'Basic Info',

    },
    {
      label: 'Offer Selection',

    },
    {
      label: 'Customer & Payment',

    },
    {
      label: 'Physical Resources',

    },
    {
      label: 'Document',

    },
    {
      label: 'Summary',

    }
    ];
    this.route.data.subscribe();
  }


}
