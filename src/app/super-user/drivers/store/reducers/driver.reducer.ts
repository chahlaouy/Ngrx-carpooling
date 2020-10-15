import { Driver } from '../../models/driver.model'
import * as driverActions from '../actions/driver.actions'

// import * as fromRoot from '../../../../app.state'

// export interface AppState extends fromRoot.AppState {
//     drivers: DriverState
// }

export interface DriverState{
    data: any,
    loading: boolean,
    loaded: boolean,
    error: string
}

export const initialState: DriverState = {
    data: [
        {
            id: '123',
            gender: 'male',
            username: 'john',
            email: 'john@email.com',
            picture: 'picture.url',
            phone: '56 128 454',
            age: 29,
            car: {
            brand: 'mercedess',
            model: 'CLA',
            state: 2020,
            serialNumber: 220
            },
            favorite: {
                pets: 1,
                smoking: 0,
                music: 1,
                chat: 1
            },
            reviews: {
                authorName: 'chahlaouy',
                authorProfilePicture: 'chahlaouy.url',
                headLine: 'It was a good trip',
                body: 'I really enjoyed the trip thanks a lot',
                rating: 4
            },
            trips: []
        },
        {
            id: '123',
            gender: 'male',
            username: 'john',
            email: 'john@email.com',
            picture: 'picture.url',
            phone: '56 128 454',
            age: 29,
            car: {
            brand: 'mercedess',
            model: 'CLA',
            state: 2020,
            serialNumber: 220
            },
            favorite: {
            pets: 1,
            smoking: 0,
            music: 1,
            chat: 1
            },
            reviews: {
            authorName: 'chahlaouy',
            authorProfilePicture: 'chahlaouy.url',
            headLine: 'It was a good trip',
            body: 'I really enjoyed the trip thanks a lot',
            rating: 4.5
            },
            trips: []
        }
    ],
    loading: false,
    loaded: false,
    error: ""
}

export function DriverReducer(
    state = initialState, action: driverActions.driverAction
    ): DriverState{

        switch(action.type){
            case driverActions.DriversActionTypes.LOAD_DRIVERS: {
                return {
                    ...state,
                    loading: true,
                    loaded: false,
                }
            }
            case driverActions.DriversActionTypes.LOAD_DRIVERS_SUCCESS: {
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    data: action.payload
                }
            }
            case driverActions.DriversActionTypes.LOAD_DRIVERS_FAIL: {
                return {
                    ...state,
                    loading: false,
                    loaded: false,
                    error: action.payload
                }
            }
            default: {
                return state
            }
        }
}


export const getDriversLoading = (state : DriverState) => state.loading;
export const getDriversLoaded = (state : DriverState) => state.loaded;
export const getDriversData = (state : DriverState) => state.data;