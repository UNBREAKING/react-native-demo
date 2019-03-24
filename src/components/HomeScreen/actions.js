import { createAction } from 'redux-actions';
import { setNewValue } from '../AddWeightScreen/actions';
import { setWeightsToStorage } from '../Storage/actions';

export const saveValueToArray = createAction('WEIGHTS_ARRAY/SAVE_VALUE')
export const saveWeightsFromStorage = createAction('WEIGHTS_ARRAY/SAVE_ARRAY_FROM_STORAGE')

export const saveWeight = () => (dispatch, getState) => {
  const { weightFieldReducer: { value } = {} } = getState()

  const newValue = value.replace(',', '.')

  dispatch(saveValueToArray(newValue))
  dispatch(setWeightsToStorage())
  dispatch(setNewValue(''))
}