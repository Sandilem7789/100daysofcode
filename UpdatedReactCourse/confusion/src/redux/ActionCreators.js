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

//taction object with type but no payload
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