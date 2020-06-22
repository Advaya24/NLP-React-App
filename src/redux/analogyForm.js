import * as ActionTypes from './ActionTypes';
export const AnalogyForm = (state = {
    x1: '',
    x2: '',
    y1: '',
    y2: 'Puppy'
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_ANALOGY_RESULT:
            return {
                ...state,
                y2: action.payload.y2
            }
        case ActionTypes.ADD_ANALOGY_INPUT:
            return {
                ...state,
                x1: action.payload.x1,
                x2: action.payload.x2,
                y1: action.payload.y1
            }
        default:
            return {
                ...state
            }
    }
}