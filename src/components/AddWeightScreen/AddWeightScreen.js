import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { COLORS, WEIGHT_REG } from '../../constants';
import styles from './styles';
import HeaderButton from './HeaderButton';

class AddWeightScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Vekt',
    headerLeft: <HeaderButton
      image={require('./img/arrowLeft.png')}
      highlightStyle={styles.headerLeftContainer}
      tintColor={COLORS.blue}
      onPress={() => navigation.goBack( )} />,
    headerRight: <HeaderButton
      isSaveButton
      highlightStyle={styles.headerRightContainer}
      textStyle={styles.headerRightText}
      onPress={() => navigation.goBack( )}
      text='Lagre' />,
    headerStyle: {
      backgroundColor: COLORS.white
    },
    headerTintColor: COLORS.black,
  })

  onChange = text => {
    const { setNewValue } = this.props

    if (!text) {
      setNewValue('')
    } else if(WEIGHT_REG.test(text)) {
      setNewValue(text)
    }
  }

  componentDidMount() {
    const { saveWhiteColorToStatusBar } = this.props

    saveWhiteColorToStatusBar()
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.headerTitle}>
          Hva er{"\n"}
          kroppsvekten din?
        </Text>
        <Text style={styles.headerSubtitle}>
          Beskriv hvorfor vi tenker det er nodvendig for brukeren a legge til her.
        </Text>
        <View style={styles.fieldWrapper}>
          <View style={styles.fieldRoundWrapper}>
            <TextInput
              style={styles.field}
              onChangeText={this.onChange}
              value={this.props.value}
              autoFocus maxLength={4} 
              keyboardType='numeric' />
            <Text style={styles.kgText}>kg</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default AddWeightScreen