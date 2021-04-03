import * as ActionTypes from "./ActionTypes";

export const Promotions = (state = {
        isLoading: true,
        errMess: null,
        promotions: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_PROMOS:
            return {...state, isLoading: false, errMess: null, promotions: action.payload}      //connected to ActionCreators
        
        case ActionTypes.PROMOS_LOADING:
            return {...state, isLoading: true, errMess: null, promotions: []}

        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, promotions: []}    //the payload here is going to be whatever parameter is passed in dishesFailed func in ActionCreators

        default: 
            return state;
    }
}