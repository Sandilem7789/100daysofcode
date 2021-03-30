/*REDUCER FOR DISHES*/

import * as ActionTypes from "./ActionTypes";

export const Dishes = (state = {
        isLoading: true,
        errMess: null,
        dishes: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload}      //connected to ActionCreators
        
        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dishes: []}    //the payload here is going to be whatever parameter is passed in dishesFailed func in ActionCreators

        default: 
            return state;
    }
}