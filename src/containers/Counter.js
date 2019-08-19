import React from 'react';
import CounterButtons from '../components/CounterButtons';
import { useSelector } from 'react-redux';

export default function Counter() {
    const score = useSelector(state => state.map(state => state.score ))

    return (
        <div>
            <p>This is a counter</p>
            <p>{score}</p>
            <CounterButtons />
        </div>
    )
}