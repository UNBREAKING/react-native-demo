import { HomeScreen, AddWeightScreen } from '../components';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { ADD_WEIGHT_SCREEN, HOME_SCREEN } from '../constants';

const AppNavigator = createStackNavigator({
  [HOME_SCREEN]: {
    screen: HomeScreen
  },
  [ADD_WEIGHT_SCREEN]: {
    screen: AddWeightScreen
  }
},
{
  headerLayoutPreset: 'center'
});

export default createAppContainer(AppNavigator)