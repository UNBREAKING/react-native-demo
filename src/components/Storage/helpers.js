import AsyncStorage from '@react-native-community/async-storage';
import { ARRAY_OF_WEIGHTS } from '../../constants';

export const getWeigths = async action => {
  try {
    const weights = await AsyncStorage.getItem(ARRAY_OF_WEIGHTS)
    const WaitsAsArray = JSON.parse(weights)
    
    WaitsAsArray && action(WaitsAsArray.map(Number))
  } catch(err) {
    console.error(err)
  }
}

export const setWeights = async items => {
  try {
    await AsyncStorage.setItem(ARRAY_OF_WEIGHTS, JSON.stringify(items))
  } catch(err) {
    console.error(err)
  }
}