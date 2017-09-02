import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import {reducer as formReducer} from 'redux-form'
import reducer from './reducers';

const reducers = combineReducers({
  form: formReducer,
  app: reducer
})

export default createStore(reducers, applyMiddleware(thunk));
