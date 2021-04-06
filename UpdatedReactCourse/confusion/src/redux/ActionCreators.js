import * as ActionTypes from "./ActionTypes";
import { DISHES } from "../shared/dishes";
import { baseUrl } from "../shared/baseUrl";


export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
    
});

//thunk for posting comments to the server
export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + "comments", {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json" 
        },
        credentials: "same-origin"
    })
    .then(response => {
        //This is how to handle a response from a server
        if(response.ok) {
            return response;
        }
        else {
            let error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
    //when the server doesnt respond, we handle the promise itself by putting a second variable..
    error => {
        const errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => {
        console.log(`Post comments ${error.message}`);
        alert(`Your comment could not be posted
        Error: ${error.message}`);
    });
}

//action creator for task 2: day 66/67
export const addFeedback = (feedback) => ({
    type: ActionTypes.ADD_FEEDBACK,
    payload: feedback
    
});

export const feedbackFailed = (errmess) => ({
    type: ActionTypes.FEEDBACK_FILED,
    payload: errmess
});

export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {
    const newFeedback = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message
    }
    newFeedback.date = new Date().toString();

    return fetch(baseUrl + "feedback", {
        method: "POST",
        body: JSON.stringify(newFeedback),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if(response.ok) {
            alert(response);
            return response;
        }
        else {
            let err = new Error(`Error ${response.status}: ${response.statusText}`);
            err.response = response;
            throw err;
        }
    },
    err => {
        const errmess = new Error(err.message);
        throw errmess;
    })
    //.then(response.json)
    .then(response => dispatch(addFeedback(response.json)))
    .catch(err => {
        console.log(`Post Feedback: ${err.message}`);
        alert(`Your Feedback could not be posted, Error: ${err.message}`)
    })
}

//action creator that returns a function: a thunk...D63: Modified for CLient Server Communication
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    //using Fetch
    return fetch(baseUrl + "dishes")
        .then(response => {
            //This is how to handle a response from a server
            if(response.ok) {
                return response;
            }
            else {
                let error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
            
        },
        //when the server doesnt respond, we handle the promise itself by putting a second variable..
        error => {
            const errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))      //pushing the response/dishes to the redux store making it persistant
        .catch(error => dispatch(dishesFailed(error.message)));
}

//this is an action object with type but no payload
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

//this is an action object with both type and payload
export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});


export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

//Added on CLient Server Communication section of the course.
export const fetchComments = () => (dispatch) => {
    //using Fetch
    return fetch(baseUrl + "comments")
        .then(response => {
            //This is how to handle a response from a server
            if(response.ok) {
                return response;
            }
            else {
                let error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
            
        },
        //when the server doesnt respond, we handle the promise itself by putting a second variable..
        error => {
            const errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))       //pushing the response/comments to the redux store making it persistant
        .catch(error => dispatch(commentsFailed(error.message)));       //catching error from the if else above
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});


export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

/*PROMOS: CLIENT SERVER COMMUNICATION*/
export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    //using Fetch
    return fetch(baseUrl + "promotions")
        .then(response => {
            //This is how to handle a response from a server
            if(response.ok) {
                return response;
            }
            else {
                let error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
            
        },
        //when the server doesnt respond, we handle the promise itself by putting a second variable..
        error => {
            const errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))       //pushing the response/promos to the redux store making it persistant
        .catch(error => dispatch(promosFailed(error.message)));
}

//action object with type but no payload
export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

//action object with both type and payload
export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});


export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

/*ASSIGNMENT 4: TASK 1 -- LEADERS' INFO FROM SERVER*/
export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});

export const addLeaders = (leader) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leader
});

/*Remeber, fetchLeaders is returning a functon of a function,
 so that it can e used as a variable elsewhere*/
export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));

    return fetch(baseUrl + "leaders")
        .then(res => {
            if(res.ok){
                return res;
            }
            else{
                let err = new Error(`Error ${res.status}: ${res.statusText}`);
                err.res = res;
                throw err;
            }
        },
        err => {
            const errmess = new Error(err.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(err => dispatch(leadersFailed(err.message)));
}