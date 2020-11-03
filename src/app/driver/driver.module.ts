import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { RouterModule, Routes } from '@angular/router'


import { DashboardComponent } from './dashboard/dashboard.component'
import { DriverCarComponent } from './driver-car/driver-car.component'
import { DriverInboxComponent } from './driver-inbox/driver-inbox.component'
import { DriverInfoComponent } from './driver-info/driver-info.component'
import { DriverReviewsComponent } from './driver-reviews/driver-reviews.component'
import { DriverRidesComponent } from './driver-rides/driver-rides.component'
import { DriverWalletComponent } from './driver-wallet/driver-wallet.component'
import { FavoriteComponent } from './favorite/favorite.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { RequestsComponent } from './requests/requests.component'
import { RideDestinationComponent } from './ride-destination/ride-destination.component'
import { RidePriceComponent } from './ride-price/ride-price.component'
import { RideSeatsComponent } from './ride-seats/ride-seats.component'
import { RideSourceComponent } from './ride-source/ride-source.component'
import { RideDateDayComponent } from './ride-date-day/ride-date-day.component'
import { RideDateHourComponent } from './ride-date-hour/ride-date-hour.component'


const routes: Routes = [ 
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'wallet',
    component: DriverWalletComponent,
  },
  {
    path: 'favorite',
    component: FavoriteComponent,
  },
  {
    path: 'requests',
    component: RequestsComponent,
  },
  {
    path: 'car',
    component: DriverCarComponent,
  },
  {
    path: 'rides',
    component: DriverRidesComponent,
  },
  {
    path: 'reviews',
    component: DriverReviewsComponent,
  },
  {
    path: 'inbox',
    component: DriverInboxComponent,
  },
  {
    path: 'info',
    component: DriverInfoComponent,
  },
  {
    path: 'add/ride-source',
    component: RideSourceComponent,
  },
  {
    path: 'add/ride-destination',
    component: RideDestinationComponent,
  },
  {
    path: 'add/ride-seats',
    component: RideSeatsComponent,
  },
  {
    path: 'add/ride-day',
    component: RideDateDayComponent,
  },
  {
    path: 'add/ride-hour',
    component: RideDateHourComponent,
  },
  {
    path: 'add/ride-price',
    component: RidePriceComponent,
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    DriverCarComponent,
    DriverInboxComponent,
    DriverInfoComponent,
    DriverReviewsComponent,
    DriverRidesComponent,
    DriverWalletComponent,
    FavoriteComponent,
    FavoriteComponent,
    LoginComponent,
    RegisterComponent,
    RequestsComponent,
    RideDestinationComponent,
    RidePriceComponent,
    RideSeatsComponent,
    RideSourceComponent,
    RideDateDayComponent,
    RideDateHourComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class DriverModule { }