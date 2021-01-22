import * as ActionTypes from './ActionTypes';

export const wants = (state = { isLoading: true,
                                    errMess: null,
                                    wants: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_WANTS:
            return {...state, isLoading: false, errMess: null, wants: action.payload};

        case ActionTypes.WANTS_LOADING:
            return {...state, isLoading: true, errMess: null, wants: []}

        case ActionTypes.WANTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
}