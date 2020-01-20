import { BasicinfoComponent } from './dashboard/basicinfo/basicinfo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerComponent } from './customer/customer.component';


const routes: Routes = [
  {
    path: 'dashboard',
    //loadChildren: () => import('./crisis-center/crisis-center.module').then(mod => mod.CrisisCenterModule),
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  { path: '', redirectTo: '/dashboard', pathMatch:'full' },
  // { path: 'offerselection', component: OfferSelectionComponent },
  // { path: 'configure', component: ConfigureComponent },
  // { path: 'configure/:itemId', component: ConfigureComponent },
  // { path: 'numberselection', component: NumberSelectionComponent },
  // { path: 'MupMembersComponent', component: MupMembersComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
