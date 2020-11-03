import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { RouterModule, Routes } from '@angular/router'

import { HomePageComponent } from './home-page/home-page.component'
import { RidesListComponent } from './rides-list/rides-list.component'


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'rides-list',
    component: RidesListComponent
  },
]
@NgModule({
  declarations: [
    HomePageComponent,
    RidesListComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
