import * as ReviewActionTypes from '../actiontypes/ReviewActionTypes';

const initialState = {
    reviews: [
        {
            movie: 'Alien',
            username: 'Sally12',
            review: "5 stars! Scariest movie I've ever seen"
        },
        {
            movie: 'Fear and loathing in Las Vegas',
            username: 'joseph44',
            review: 'Great movie, such a mind-bender!'
        },
        {
            movie: 'Starship Troopers',
            username: 'Scary_Terry',
            review: 'Classic Sci-fi with wonderful visuals!'
        }
    ]
}

export const fillReview = (movie, username, review) => {
    return {
       movie,
       username,
       review
    }
}

export default function ReviewsReducer(state=initialState, action) {
    switch (action.type) {
        case ReviewActionTypes.ADD_REVIEW:
            return {
                reviews: [
                    ...state.reviews,
                    fillReview(action.movie, action.username, action.review)
                ]
            }
                
        case ReviewActionTypes.EDIT_REVIEW:

            return {
                reviews: state.reviews.map((data, index) => {
                    if (index === action.index) {
                        return fillReview(action.movie, action.username, action.review);
                    } 
                    return data
                })
            }
            
        case ReviewActionTypes.DELETE_REVIEW:
            return {
                reviews: [
                    ...state.reviews.slice(0, action.index),
                    ...state.reviews.slice(action.index + 1)
                ]
            }
        default:
            return state;
    }
}