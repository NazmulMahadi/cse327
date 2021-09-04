import { createStore, combineReducers, applyMiddleware } from 'redux';
import testReducers from './reducers/testReducers';
import authReducers from './reducers/authReducer';
import postReducers from './reducers/postJobReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk'

const middleWares = [ReduxThunk]

const combineReducer = combineReducers({
    tests: testReducers,
    auth: authReducers,
    postReducers: postReducers
})

export const store = createStore(
    combineReducer,
    composeWithDevTools(applyMiddleware(...middleWares))

)

