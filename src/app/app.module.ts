
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppCommon } from './app.common';
import * as $ from 'jquery';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { ShareModule } from './shared/share.module';
import { CustomerComponent } from './customer/customer.component';
import { FilterSelectionComponent } from './customer/filter-selection/filter-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    FilterSelectionComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    //MatDialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    //MatTabsModule,
    //MatRadioModule,
    //MatSelectModule,
    DashboardModule,
    DashboardRoutingModule,
    ShareModule,
    //MatIconModule,
    //MatSidenavModule,
    //MatSnackBarModule,
    AppRoutingModule,
  ],
  providers: [AppCommon],
  bootstrap: [AppComponent],
 
})
export class AppModule { 

}
