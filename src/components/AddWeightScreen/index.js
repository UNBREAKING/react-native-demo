import { connect } from 'react-redux';
import { saveWhiteColorToStatusBar } from '../StatusBar/actions';
import { setNewValue } from './actions';
import AddWeightScreen from './AddWeightScreen';

const mapStateToProps = ({ weightFieldReducer: { value } = {} }) => ({ value })

export default connect(mapStateToProps, { saveWhiteColorToStatusBar, setNewValue })(AddWeightScreen)