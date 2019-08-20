import React, { useState } from 'react';
import * as ReviewActions from '../actions/ReviewActions';
import { useDispatch } from 'react-redux';

export default function ReviewList(props) {
    const [onEdit, setOnEdit] = useState(false);
    const { reviews } = props;
    const dispatch = useDispatch();

    const toggleEdit = (bool, index) => {
        
    }
    
    const reviewTableSection = reviews.map((data, index) => {
        return (
            <tr>
                {onEdit === true && index === 0 ? <input type="text"/> : <td>{data.movie}</td>} 
                <td>{data.username}</td>
                <td>{data.review}</td>
                <button onClick={() => setOnEdit(true)}>Edit</button>
                <button onClick={() => dispatch(ReviewActions.deleteReview(index))}>Delete</button>
            </tr>
        )
    });

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Movie</th>
                        <th>Username</th>
                        <th>Review</th>
                    </tr>
                    {reviewTableSection}
                </tbody>
            </table>
        </>
    )
}