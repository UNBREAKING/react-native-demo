import { handleActions } from 'redux-actions';
import { setNewValue } from './actions';

const initialState = {
  value: ''
}

const weightFieldReducer = handleActions({
  [setNewValue]: (state, { payload }) => ({ ...state, value: payload })
}, initialState)

export default weightFieldReducer