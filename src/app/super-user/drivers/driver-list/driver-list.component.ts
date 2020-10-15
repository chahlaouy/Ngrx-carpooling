import { Component, OnInit } from '@angular/core';

/**
 * Import The Store From @ngrx/store So That We Can Dispatch an Action
 */

import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';

import * as fromStore from '../store'

 
@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss'],
})
export class DriverListComponent implements OnInit {

  drivers$: any;

  constructor(
    private store: Store<fromStore.DriversState>,
    ) 
    { 
       
    }

  ngOnInit() {
       this.drivers$ =  this.store.select(fromStore.getDriversData)
        
  }

}
