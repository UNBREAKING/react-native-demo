import { handleActions } from 'redux-actions';
import { saveValueToArray, saveWeightsFromStorage } from './actions';

const initialState = {
  daylyWeights: []
}

const arrayOfDaylyWeight = handleActions({
  [saveValueToArray]: (state, { payload }) => ({ ...state, daylyWeights: [ ...state.daylyWeights, Number(payload) ] }),
  [saveWeightsFromStorage]: (state, { payload }) => ({ ...state, daylyWeights: payload })
}, initialState)

export default arrayOfDaylyWeight