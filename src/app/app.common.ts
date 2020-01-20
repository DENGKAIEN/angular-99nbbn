import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

export interface InternalStateType {
  [key: string]: any;
};

@Injectable()

export class AppCommon {
  public data(key?, value?) {
    if (arguments.length) {
      const data = this.data() || {};
      if (typeof (key) === 'object') {
        sessionStorage.setItem('data', JSON.stringify($.extend(data, key)));
        return;
      } else if (arguments.length === 2) {
        data[key] = value;
        sessionStorage.setItem('data', JSON.stringify(data));
        return;
      }
      return data[key];
    }
    return sessionStorage.getItem('data') ? JSON.parse(sessionStorage.getItem('data')) : undefined;
  }
  public copy(object){
    return JSON.parse(JSON.stringify(object));
  }
}
