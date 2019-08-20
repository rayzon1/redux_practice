import React from 'react';
import ReviewList from '../components/ReviewList';
import InputBar from '../components/InputBar';
import { useSelector } from 'react-redux';

export default function Reviews() {
    const reviews = useSelector(state => state.reviews.reviews)
    

    return (
        <>
            <h1>Reviews list</h1>
            <ReviewList reviews={reviews} />
            <InputBar />
        </>
        
    )
}