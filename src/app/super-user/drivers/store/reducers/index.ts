import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store'
import * as DriverReducer from './driver.reducer'

export interface DriversState {
    drivers: DriverReducer.DriverState
}

export const reducers : ActionReducerMap<DriversState> = {
    drivers: DriverReducer.DriverReducer,
}

export const getGlobalDriversState = createFeatureSelector<DriversState>('superUserDrivers');

export const getDriversState = createSelector(getGlobalDriversState, (state:DriversState) => state.drivers)

export const getDriversData = createSelector(getDriversState, DriverReducer.getDriversData)
export const getDriversLoaded = createSelector(getDriversState, DriverReducer.getDriversLoaded)
export const getDriversloading = createSelector(getDriversState, DriverReducer.getDriversLoading)
