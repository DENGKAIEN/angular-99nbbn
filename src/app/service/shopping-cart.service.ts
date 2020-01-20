import { AppCommon } from '../app.common';
import { Injectable, SimpleChanges } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  subscribers = [];
  upfrontTotalDetail = '';
  upfrontTotalSum = 0;
  clubpointRequired = 0;
  totalMonthlyRate = '';
  constructor(private appCommon: AppCommon) {
    this.subscribers = this.appCommon.data('subscribers');
    this.subscribers = this.subscribers != null ? this.subscribers : [];
    console.log('this.subscribers:', this.subscribers);
    //this.subscribers
  }
  ngOnChanges(changes: SimpleChanges) {
    this.getUpfrontTotal();
    console.log('upfrontTotalSum:', this.upfrontTotalSum);
  }
  addToCart(product: any) {
    let subscriber = { id: this.getRandomNum() };
    subscriber['product'] = product;
    if (product.isMup) {
      subscriber['groupDesc'] = 'new group subscriber';
      subscriber['groupName'] = 'MUP group 1';
      subscriber['subscribers'] = [];
    } else {
      subscriber['subscribers'] = [{ id: this.getRandomNum(), desc: 'new subscriber', value: 'service number 1',sim:{type:''} }];
    }
    this.subscribers.push(subscriber);
    console.log("service:", this.subscribers);
    this.appCommon.data('subscribers', this.subscribers);
    this.getUpfrontTotal();
  }
  addVas(v: any, id: any) {
    let vas = { id: this.getRandomNum(), ...v };
    this.subscribers.map((su) => {
      this.addVasLoop(vas, id, su);
    });
    this.appCommon.data('subscribers', this.subscribers);
    this.getUpfrontTotal();
    console.log('vas this.subscribers:', this.subscribers);
  }
  addVasLoop(v: any, id: any, su: any) {
    if (su.id == id) {
      if (su.vas == undefined || su.vas == null) {
        su['vas'] = [v];
      } else {
        su.vas.push(v);
      }
    } else if (su.subscribers != null && su.subscribers != undefined && su.subscribers.length != 0) {
      su.subscribers.map((si) => {
        this.addVasLoop(v, id, si);
      });
    }
  }
  removeVas(vasId: any) {
    this.subscribers.map((su) => {
      this.removeVasLoop(vasId, su);
    });
    this.appCommon.data('subscribers', this.subscribers);
    this.getUpfrontTotal();
  }
  removeVasLoop(vasId: any, su: any) {
    if (su.vas != undefined && su.vas != null) {
      su.vas = su.vas.filter((vas) => vas.id != vasId)
    } else if (su.subscribers != null && su.subscribers != undefined && su.subscribers.length != 0) {
      this.removeVasLoop(vasId, su.subscribers);
      su.subscribers.map((si) => {
        this.removeVasLoop(vasId, si);
      });
    }
  }
  removeFromCart(id) {
    this.subscribers = this.subscribers.filter((su) => su.id != id);
    this.appCommon.data('subscribers', this.subscribers);
    this.getUpfrontTotal();
    console.log("this.subscribers:", this.subscribers);
  }
  getsubscribers(): any {
    return this.subscribers;
  }

  getCount(): number {
    return this.subscribers.length;
  }

  getRandomNum() {
    var Rand = Math.random();
    return Math.round(Rand * 100000000);
  }

  findById(id): any {
    let s = this.subscribers.find((su) => su.id == id);
    return s;
  }

  updateSubscriber(su) {
    this.subscribers = this.subscribers.map((s) => {
      if (s.id == su.id) {
        return su;
      } else {
        return s;
      }
    });
    console.log('this.subscribers:', this.subscribers);
    this.appCommon.data('subscribers', this.subscribers);
    this.getUpfrontTotal();
  }

  addGroupSubscribers(id: any, num: number) {
    let groupSubscribers = [];
    this.subscribers.map((su) => {
      if (su.id == id) {
        let count = su.subscribers.length;
        let extra = num - count;
        //su['subscribers'] = groupSubscribers;
        for (let i = 0; i < extra; i++) {
          count += 1;
          let gs = { id: this.getRandomNum(), desc: 'new subscriber', value: `service number ${count}`, sim:{type:''} };
          su.subscribers.push(gs);
        }
      }
      return su;
    });
    console.log(this.subscribers);
    this.appCommon.data('subscribers', this.subscribers);
    this.getUpfrontTotal();
  }

  removeGroupSubscriber(sid, gsId) {
    this.subscribers.map((su) => {
      if (su.id == sid) {
        su.subscribers = su.subscribers.filter((gs) => gs.id != gsId);
      }
      return su;
    });
  }

  saveBasicInfo(basicInfo) {
    this.appCommon.data('basicInfo', basicInfo);
    this.getUpfrontTotal();
  }

  getBasicInfo(): any {
    let basicInfo = this.appCommon.data('basicInfo');
    console.log(basicInfo);
    if (basicInfo == undefined) {
      basicInfo = {
        orderNo: '54585454353',
        orderNature: 'New',
        usage: 'individual',
        documentType: 'HKID',
        documentNum: 'Z123XXX(2)',
        customerName: 'WONG TAI YAN',
        prefix: '852',
        num: '96669555',
        contactFixedLineNum: '24343424',
        contactEmailAddress: 'brandawong@gmail.com',
        clubMembershipId: '6546546352',
        staffNum: 'T00423444',
        staffName: 'GIGI LEE',
        contactNum: '28843321',
        referrer: '',
        referrerName: '',
      }
    }
    return basicInfo;
  }

  getUpfrontTotal() {
    this.upfrontTotalDetail = '';
    this.upfrontTotalSum = 0;
    this.clubpointRequired = 0;
    this.totalMonthlyRate = '';
    for (let su of this.subscribers) {
      this.summaryUpfrontTotal(su);
    }
  }
  summaryUpfrontTotal(su: any) {
    if (su.product != null && su.product != undefined) {
      this.upfrontTotalDetail = this.upfrontTotalDetail + (this.upfrontTotalDetail == '' ? '$' : ' +$') + su.product.info.price;
      if(su.product.plan.price){
        this.upfrontTotalDetail = this.upfrontTotalDetail + (this.upfrontTotalDetail == '' ? '$' : ' +$') + su.product.plan.price;
        this.totalMonthlyRate = this.totalMonthlyRate + (this.totalMonthlyRate == '' ? '$' : ' +$') + su.product.plan.price;
      }
      this.upfrontTotalSum += su.product.info.price+su.product.plan.price;
      this.clubpointRequired += su.product.info.clubPoint?su.product.info.clubPoint:0;
    }
    if (su.vas != null && su.vas != undefined) {
      for (let v of su.vas) {
        this.upfrontTotalDetail = this.upfrontTotalDetail + ' +$' + v.plan.price;
        this.upfrontTotalSum += v.plan.price;
        this.totalMonthlyRate = this.totalMonthlyRate + (this.totalMonthlyRate == '' ? '$' : ' +$') + v.plan.price;
      }
    }
    if (su.subscribers != null && su.subscribers.length > 0) {
      for (let si of su.subscribers) {
        this.summaryUpfrontTotal(si);
      }
    }
  }
}
