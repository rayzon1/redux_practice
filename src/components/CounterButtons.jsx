import React from 'react';
import * as CounterActions from '../actions/CounterActions';
import { useDispatch } from 'react-redux';


export default function CounterButtons() {

    const dispatch = useDispatch();

    return (
        <>
            <button onClick={() => dispatch(CounterActions.addScore(5))}> + </button>
            <button onClick={() => dispatch(CounterActions.minusScore(5))}> - </button>
            <br />
            <button onClick={() => dispatch(CounterActions.resetScore())}>Reset</button>
        </>
    )
}