import * as ActionTypes from './ActionTypes';
export const ASLForm = (state = {
    aslOutputText: 'ASL output goes here...',
    englishInputText: ''
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_ASL_OUTPUT_TEXT:
            return {
                ...state,
                aslOutputText: action.payload.outputText
            }
        case ActionTypes.ADD_ENGLISH_INPUT_TEXT:
            return {
                ...state,
                englishInputText: action.payload.englishInputText
            }
        default:
            return {
                ...state
            }
    }
}