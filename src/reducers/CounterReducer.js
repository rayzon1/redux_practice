import * as CounterActionTypes from '../actiontypes/CounterActionTypes';

const initialState = 
    [
        {
            score: 0
        }
    ]

export default function CounterReducer(state = initialState, action) {
    switch (action.type) {
        case CounterActionTypes.ADD_SCORE:
            return state.map( val => {
                return {score: val.score + action.num}
            })

        case CounterActionTypes.MINUS_SCORE:
            return state.map( val => {
                return {score: val.score - action.num}
            })
        
        case CounterActionTypes.RESET_SCORE:
            return initialState;
    
        default:
            return state;
    }
} 