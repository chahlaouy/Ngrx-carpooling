const initialState = {
    drivers: [
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
    loaded: true 
}

export function DriverReducer(state = initialState, action){

    switch(action.type){
        case "LOAD_DRIVERS": {
            return {
                ...state,
                loading: true,
                loaded: false
            }
        }
        default: {
            return state
        }
    }
}