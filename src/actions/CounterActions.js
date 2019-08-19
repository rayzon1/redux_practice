import * as CounterActionTypes from '../actiontypes/CounterActionTypes';

export const addScore = num => {
    return {
        type: CounterActionTypes.ADD_SCORE,
        num
    }
};

export const minusScore = num => {
    return {
        type: CounterActionTypes.MINUS_SCORE,
        num
    }
};

export const resetScore = () => {
    return {
        type: CounterActionTypes.RESET_SCORE
    }
}