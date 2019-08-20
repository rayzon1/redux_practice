import React, { useState } from 'react';
import * as ReviewActions from '../actions/ReviewActions';
import { useDispatch } from 'react-redux';

export default function InputBar() {
    const [movieInput, getMovieInput] = useState("");
    const [userInput, getUserInput] = useState("");
    const [reviewInput, getReviewInput] = useState("");

    const dispatch = useDispatch();

    const formSubmit = (e) => {
        e.preventDefault();
        dispatch(ReviewActions.addReview(movieInput, userInput, reviewInput));
    }
    
    return(
        <>
            <br/>
            <form onSubmit={formSubmit}>
                <input type="text" onChange={e => getMovieInput(e.target.value)} placeholder="Movie"/>
                <input type="text" onChange={e => getUserInput(e.target.value)} placeholder="Username"/>
                <input type="text" onChange={e => getReviewInput(e.target.value)} placeholder="Review"/>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}