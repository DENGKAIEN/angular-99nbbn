import { DocumentComponent } from './document/document.component';
import { PaymentComponent } from './payment/payment.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicinfoComponent } from './basicinfo/basicinfo.component';
import { DashboardComponent } from './dashboard.component';
import { OfferselectionComponent } from './offerselection/offerselection.component';
import { ConfigComponent } from './config/config.component';
import { PhysicalresourcesComponent } from './physicalresources/physicalresources.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [

      { path: 'basicinfo', component: BasicinfoComponent, data: { activeIndex: 0 } },
      { path: 'offerselection', component: OfferselectionComponent, data: { activeIndex: 1} },
      { path: 'config', component: ConfigComponent, data: { activeIndex: 1 } },
      { path: 'payment', component: PaymentComponent, data: { activeIndex: 2 } },
      { path: 'physicalresources', component: PhysicalresourcesComponent, data: { activeIndex: 3 } },
      { path: 'document', component: DocumentComponent, data: { activeIndex: 4 } },
      { path: 'summary', component: SummaryComponent, data: { activeIndex: 5 } }


    ]
  },
  // {
  //   path: 'basicinfo',
  //   component: BasicinfoComponent
  // }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
