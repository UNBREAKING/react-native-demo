import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 30
  },
  headerLeftContainer: {
    marginLeft: 10
  },
  headerRightContainer: {
    marginRight: 10,
  },
  headerRightText: {
    fontSize: 16,
    color: COLORS.blue
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '500',
    marginLeft: 20,
    color: COLORS.black
  },
  headerSubtitle: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 20,
    paddingRight: 40,
    color: COLORS.gray
  },
  fieldWrapper: {
    marginTop: 40,
    alignItems: 'center'
  },
  fieldRoundWrapper: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: COLORS.blue,
    borderRadius: 40,
    width: 180
  },
  field: {
    color: COLORS.white,
    fontSize: 32,
    alignSelf: 'center',
    fontWeight: '500'
  },
  kgText: {
    position: 'absolute',
    fontSize: 16,
    color: COLORS.white,
    fontWeight: '500',
    alignSelf: 'center',
    right: 15
  }
});

export default styles