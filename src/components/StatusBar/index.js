import { connect } from 'react-redux';
import StatusBar from './StatusBar';

const mapStateToProps = ({ 
  statusBarColor: { 
    color 
  } = {} 
}) => ({
  color
})

export default connect(mapStateToProps)(StatusBar)