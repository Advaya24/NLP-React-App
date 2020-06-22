import * as ActionTypes from './ActionTypes';

export const postAnalogyInput = (formInput) => dispatch => {
    const input = formInput;

    return fetch(`/api/analogy`, {
        method: 'POST',
        body: JSON.stringify(input),
        headers: {
            'Content-Type': 'application/json',
            "accepts": "application/json"
        },
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error' + response.status + ": " + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => dispatch(addResult(response)))
        .catch(error => {
            console.log('Post input ', error.message);
            alert('Your input could not be posted.\nError: ', error.message);
        });
}

export const addResult = (result) => ({
    type: ActionTypes.ADD_ANALOGY_RESULT,
    payload: result
})

export const postInputSentence = (formInput) => dispatch => {
    const input = formInput;

    return fetch(`/api/ASL`, {
        method: 'POST',
        body: JSON.stringify(input),
        headers: {
            'Content-Type': 'application/json',
            "accepts": "application/json"
        },
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error' + response.status + ": " + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => dispatch(addASLOutputText(response)))
        .catch(error => {
            console.log('Post input ', error.message);
            alert('Your input could not be posted.\nError: ', error.message);
        });
}

export const addASLOutputText = (result) => ({
    type: ActionTypes.ADD_ASL_OUTPUT_TEXT,
    payload: result
})

export const addEnglishInputText = (input) => ({
    type: ActionTypes.ADD_ENGLISH_INPUT_TEXT,
    payload: input
})

export const addAnalogyInput = (input) => ({
    type: ActionTypes.ADD_ANALOGY_INPUT,
    payload: input
})