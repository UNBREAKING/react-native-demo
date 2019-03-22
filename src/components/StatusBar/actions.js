import { createAction } from 'redux-actions';
import { COLORS } from '../../constants';

export const saveStatusBarColor = createAction('STATUSBAR/SAVE_COLOR')

export const saveLightOrangeColorToStatusBar = () => dispatch => {
  dispatch(saveStatusBarColor(COLORS.lightOrange))
}

export const saveWhiteColorToStatusBar = () => dispatch => {
  dispatch(saveStatusBarColor(COLORS.white))
}