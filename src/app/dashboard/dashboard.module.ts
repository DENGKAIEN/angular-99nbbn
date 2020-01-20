import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { StepsModule } from 'primeng/components/steps/steps';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SliderModule } from 'primeng/slider';
import { ShareModule } from '../shared/share.module';
import { BasicinfoComponent } from './basicinfo/basicinfo.component';
import { ConfigComponent } from './config/config.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { OfferselectionComponent } from './offerselection/offerselection.component';
import { DashboardComponent } from './dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { PhysicalresourcesComponent } from './physicalresources/physicalresources.component';
import { DocumentComponent } from './document/document.component';
import { SummaryComponent } from './summary/summary.component';
import { DemoMaterialModule } from '../material-module';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [DashboardComponent, OfferselectionComponent,BasicinfoComponent, ConfigComponent, PaymentComponent, PhysicalresourcesComponent, DocumentComponent, SummaryComponent],
  imports: [
    CalendarModule,
    SliderModule,
    DemoMaterialModule,
    DashboardRoutingModule,
    CommonModule,
    ShareModule,
    OverlayPanelModule,
    MultiSelectModule,
    CheckboxModule,
    FormsModule,
    StepsModule,
    ReactiveFormsModule
  ],
   entryComponents:[],
  exports:[DashboardComponent]
})
export class DashboardModule { }
