import { Injectable } from '@angular/core'

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { catchError, map, switchMap } from 'rxjs/operators'
import { HomeService } from '../../home.services/home.service';
import * as ridesActions from '../actions/rides.actions'

@Injectable() 
export class RidesEffect {

    constructor ( 
        private actions$: Actions,
        private homeService: HomeService
    ){}

    @Effect()
    loadRides = this.actions$.pipe(ofType(ridesActions.RidesActionTypes.LOAD_RIDES)).pipe(
        switchMap(() => {
            return this.homeService.getAllRides().pipe(
                map((value) => {
                    const entities : {[id: string] : any} = {};
                    value.docs.forEach(doc => {
                        let index= doc.id;
                        entities[index] = {
                            id: index,
                            ...doc.data()

                        }
                    });
                    return new ridesActions.LoadRidesSuccess(entities)
                }
                ),
                catchError((error) => of(new ridesActions.LoadRidesFail(error)) )
            )
        })
    )
}