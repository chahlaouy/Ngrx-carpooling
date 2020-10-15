import { Injectable } from '@angular/core'

import { Actions, Effect, ofType } from '@ngrx/effects'
import { observable, of } from 'rxjs'
import { map, mergeMap, catchError } from 'rxjs/operators'

import { DriverService } from '../../services/driver.service'
import * as driverActions from '../actions/driver.actions'
import { Driver } from '../../models/driver.model'
@Injectable()
export class DriverEffect {

    constructor(
        private actions$: Actions,
        private driverService: DriverService
    ){}

}