import { createStore, compose } from 'redux';
import { reducer } from './reducers/core-reducer';

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;

const configureStore = preloadedState => createStore(
    reducer,
    preloadedState,
    composeEnhancers()
);

export const store = configureStore({});