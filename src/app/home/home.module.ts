import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router'

import { HomePageComponent } from './home-page/home-page.component'
import { RidesListComponent } from './rides-list/rides-list.component'
import { RideEditComponent } from './ride-edit/ride-edit.component'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { reducers, effects } from './store'

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent 
  }, 
  {
    path: 'rides-list',
    component: RidesListComponent
  },
  {
    path: 'rides-list/:rideId',
    component: RideEditComponent
  },
]
@NgModule({
  declarations: [
    HomePageComponent,
    RidesListComponent,
    RideEditComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("homerides", reducers),
    EffectsModule.forFeature(effects),
    HttpClientModule,
  ]
})
export class HomeModule { }
