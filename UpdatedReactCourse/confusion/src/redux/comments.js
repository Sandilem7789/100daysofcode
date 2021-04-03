/*COMMENTS REDUCER*/
import * as ActionTypes from "./ActionTypes"

export const Comments = (state = {
    errMess: null,
    comments: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, errMess: null, comments: action.payload}      //connected to ActionCreators

        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, comments: []}    //the payload here is going to be whatever parameter is passed in dishesFailed func in ActionCreators

        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            return {...state, comments: state.comments.concat(comment)};
        
            default: 
            return state;
    }
}