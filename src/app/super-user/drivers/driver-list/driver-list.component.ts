import { Component, OnInit } from '@angular/core';

/**
 * Import The Store From @ngrx/store So That We Can Dispatch an Action
 */

import { Store } from '@ngrx/store'
import * as fromStore from '../store'
import { Observable } from 'rxjs';
import { DriverService } from '../services/driver.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss'],
})
export class DriverListComponent implements OnInit {

  drivers$: Observable<any>;
  testEntities$: Observable<any>;
  loaded$: Observable<any>;
  constructor(
    private store: Store<fromStore.DriversState>,
    public loadingController: LoadingController
    ) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadDrivers());

    this.drivers$ =  this.store.select(fromStore.getDriversDataAsArray)
    this.loaded$ = this.store.select(fromStore.getDriversloading)
    this.testEntities$ = this.store.select(fromStore.getDriversEntities)
    // console.log(this.testEntities$)
    this.presentLoading().then((l) => {
      l.present()
      this.loaded$.subscribe(loaded => {
        if (loaded){
          l.dismiss()
        }
      })
    })
  }

  async presentLoading() {
    return await this.loadingController.create({
      message: 'ارجوك انتظر ...',
    });
  }

}
