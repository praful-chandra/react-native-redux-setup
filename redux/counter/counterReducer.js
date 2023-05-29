import {INCREMENT_COUNTER, DECREMENT_COUNTER} from './counterActionTypes'

const initialState = {
    count: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                count: state.count + action.payload
            }
        case DECREMENT_COUNTER:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}

export default counterReducer;
