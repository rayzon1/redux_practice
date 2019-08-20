import * as ReviewActionTypes from '../actiontypes/ReviewActionTypes';

export const addReview = (movie, username, review) => {
    return {
        type: ReviewActionTypes.ADD_REVIEW,
        movie,
        username,
        review
    }
}

export const editReview = (index, movie, username, review) => {
    return {
        type: ReviewActionTypes.EDIT_REVIEW,
        index,
        movie,
        username,
        review
    }
}

export const deleteReview = index => {
    return {
        type: ReviewActionTypes.DELETE_REVIEW,
        index
    }
}