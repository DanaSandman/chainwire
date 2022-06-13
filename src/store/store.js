import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { currencyReducer } from './reducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  currencyModule: currencyReducer,
  });

  export const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  