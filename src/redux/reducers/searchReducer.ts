import { actionTypes } from '../constants'

const INITIAL_STATE = {
    type: 'SEARCH_VALUE',
    value: 'pokemon',
    active: false
};

export const searchReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case actionTypes.SEARCH_VALUE:
            return {
                ...state,
                value: action.value,
                active: true
            };
        default:
            return state;
    }
};