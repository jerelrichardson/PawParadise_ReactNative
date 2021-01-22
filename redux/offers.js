import * as ActionTypes from './ActionTypes';

export const offers = (state = { isLoading: true,
                                    errMess: null,
                                    offers: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_OFFERS:
            return {...state, isLoading: false, errMess: null, offers: action.payload};

        case ActionTypes.OFFERS_LOADING:
            return {...state, isLoading: true, errMess: null, offers: []}

        case ActionTypes.OFFERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
}