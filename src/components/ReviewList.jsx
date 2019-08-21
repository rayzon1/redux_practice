import React, { useState, useEffect } from "react";
import * as ReviewActions from "../actions/ReviewActions";
import { useDispatch } from "react-redux";

export default function ReviewList(props) {
  const [onEdit, setOnEdit] = useState({ bool: false, index: null });
  const movieRef = React.createRef();
  const userRef = React.createRef();
  const reviewRef = React.createRef();
  const { reviews } = props;
  const dispatch = useDispatch();

  const toggleButtons = index => {
    if (onEdit.bool && onEdit.index === index) {
      return (
        <button
          onClick={() =>
            submitEditedReview(
              index,
              movieRef.current.value,
              userRef.current.value,
              reviewRef.current.value
            )
          }
        >
          Submit
        </button>
      );
    } else {
      return (
        <button onClick={() => setOnEdit({ bool: true, index: index })}>
          Edit
        </button>
      );
    }
  };

  const submitEditedReview = (index, movie, username, review) => {
    setOnEdit({ bool: false, index: null });
    dispatch(ReviewActions.editReview(index, movie, username, review));
  };

  const reviewTableSection = reviews.map((data, index) => {
    return (
      <tr>
        {onEdit.bool && onEdit.index === index ? (
          <>
            <td>
              <input type="text" defaultValue={data.movie} ref={movieRef} />
            </td>
            <td>
              <input type="text" defaultValue={data.username} ref={userRef} />
            </td>
            <td>
              <input
                type="text"
                defaultValue={data.review}
                ref={reviewRef}
                style={{ width: "225px" }}
              />
            </td>
          </>
        ) : (
          <>
            <td>
              {data.movie.length > 17
                ? data.movie.slice(0, 17) + "..."
                : data.movie}
            </td>
            <td>{data.username}</td>
            <td>{data.review}</td>
          </>
        )}

        {toggleButtons(index)}
        <button onClick={() => dispatch(ReviewActions.deleteReview(index))}>
          Delete
        </button>
      </tr>
    );
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
  );
}
