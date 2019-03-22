import { connect } from 'react-redux';
import { saveLightOrangeColorToStatusBar } from '../StatusBar/actions';
import HomeScreen from './HomeScreen';

export default connect(null, { saveLightOrangeColorToStatusBar })(HomeScreen)