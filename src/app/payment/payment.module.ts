import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router'

import { MasterCardComponent } from './master-card/master-card.component'

const routes: Routes = [
  {
    path: 'master-card',
    component: MasterCardComponent
  }
]

@NgModule({
  declarations: [
    MasterCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule,
    HttpClientModule
  ]
})
export class PaymentModule { }
