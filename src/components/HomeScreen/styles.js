import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.orange,
    paddingTop: 10
  },
  header: {
    fontSize: 26,
    fontWeight: '500',
    margin: 20,
    color: COLORS.white
  },
  buttonContainer: {
    alignItems: 'center'
  },
  navigationButton: {
    backgroundColor: COLORS.white,
    borderRadius: 30,
    width: '80%',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navigationButtonText: {
    color: COLORS.orange,
    fontSize: 26,
    textAlign: 'center',
    fontWeight: '500'
  }
});

export default styles