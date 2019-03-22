import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import statusBarColor from '../components/StatusBar/reducer';
import weightFieldReducer from '../components/AddWeightScreen/reducer';
import arrayOfDaylyWeight from '../components/HomeScreen/reducer';
import storageMiddleware from '../components/Storage/storageMiddleware';

const reducers = combineReducers({
  statusBarColor,
  weightFieldReducer,
  arrayOfDaylyWeight
})

const middleware = [
  thunk,
  storageMiddleware
]

const store = createStore(
  reducers, 
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store