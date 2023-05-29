import {INCREMENT_COUNTER, DECREMENT_COUNTER} from './counterActionTypes'

export const incrementCounterAction = (payload) => {
    return {
        type: INCREMENT_COUNTER,
        payload
    }
}

export const decrementCounterAction = () => {
    return {
        type: DECREMENT_COUNTER,

    }
}
