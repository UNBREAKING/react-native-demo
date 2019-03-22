import React, { Component } from 'react';
import { 
  Text,
  View 
} from 'react-native';
import { Button } from '../common';
import { COLORS, ADD_WEIGHT_SCREEN } from '../../constants';
import { Chart } from '../';
import styles from './styles';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Min Graviditet',
    headerStyle: {
      backgroundColor: COLORS.lightOrange
    },
    headerTintColor: COLORS.white,
    headerTitleStyle: {
      fontSize: 14,
      fontWeight: '400',
      textTransform: 'uppercase',
    }
  }

  onPress = () => {
    const { navigation: { navigate } = {} } = this.props

    navigate(ADD_WEIGHT_SCREEN)
  }

  componentDidMount() {
    const { saveLightOrangeColorToStatusBar } = this.props

    saveLightOrangeColorToStatusBar()
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Din vektokning</Text>
        <Chart />
        <View style={styles.buttonContainer}>
          <Button 
            textStyle={styles.navigationButtonText} 
            highlightStyle={styles.navigationButton}
            text='Legg inn dagens vekt'
            onPress={this.onPress} />
        </View>
      </View>
    )
  }
}

export default HomeScreen