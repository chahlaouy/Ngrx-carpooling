import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
/**
 * Importing The Reactive And Forms Module To Deal With Form In Angular
 */

import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

/**
 * Importing Ionic Module 
 */

import { IonicModule } from '@ionic/angular';

/**
 * Import The store Module and The Reducer for The Drivers Module
 */

import { StoreModule } from '@ngrx/store'
import { reducers } from './store/reducers/index'

/**
 * Import Components Of The Drivers Module
 */

 import { DriverComponent } from './driver/driver.component' 
 import { DriverAddComponent } from './driver-add/driver-add.component' 
 import { DriverEditComponent } from './driver-edit/driver-edit.component' 
 import { DriverListComponent } from './driver-list/driver-list.component' 

/**
 * Declaring the Drivers Routes in the Drivers Module
 */

const routes: Routes = [
  {
    path: 'driver',
    component: DriverComponent
  },
  {
    path: 'driver-add',
    component: DriverAddComponent
  },
  {
    path: 'driver-edit',
    component: DriverEditComponent
  },
  {
    path: 'driver-list',
    component: DriverListComponent
  }
]

@NgModule({
  declarations: [
    DriverComponent,
    DriverAddComponent,
    DriverEditComponent,
    DriverListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("superUserDrivers", reducers),
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ]
})
export class DriversModule { }
