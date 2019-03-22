
import { setWeightsToStorage, getWeghtsFromStorage } from './actions';
import { saveWeightsFromStorage } from '../HomeScreen/actions';
import { getWeigths, setWeights } from './helpers';

const storageMiddleware = ({ dispatch, getState }) => next => action => {
  
  if(action.type === String(setWeightsToStorage)) {   
      const { 
        arrayOfDaylyWeight: { 
          daylyWeights 
        } = {} 
      } = getState()

      setWeights(daylyWeights)
  }

  if(action.type === String(getWeghtsFromStorage)) {
      getWeigths(items => dispatch(saveWeightsFromStorage(items)))
  }

  return next(action)
}

export default storageMiddleware