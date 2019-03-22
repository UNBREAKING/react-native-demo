import { createAction } from 'redux-actions';

export const setWeightsToStorage = createAction('STORAGE/SAVE_WEIGHTS')
export const getWeghtsFromStorage = createAction('STORAGE/GET_WEIGHTS')