import { connect } from 'react-redux';
import { setWeightsToStorage, getWeghtsFromStorage } from './actions';
import Storage from './Storage';

export default connect(null, { setWeightsToStorage, getWeghtsFromStorage })(Storage) 