import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { AnalogyForm } from './analogyForm';
import { ASLForm } from './aslForm';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            analogyForm: AnalogyForm,
            aslForm: ASLForm,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}