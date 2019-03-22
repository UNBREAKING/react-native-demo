import { handleActions } from 'redux-actions';
import { saveStatusBarColor } from './actions';
import { COLORS } from '../../constants';

const initialState = {
  color: COLORS.lightOrange
}

const statusBarColor = handleActions({
  [saveStatusBarColor]: (state, { payload }) => ({ ...state, color: payload })
}, initialState)

export default statusBarColor