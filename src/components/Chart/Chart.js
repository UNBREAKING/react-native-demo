import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { COLORS } from '../../constants'; 

const Chart = ({ daylyWeights, data }) =>
  daylyWeights && daylyWeights.length > 0 &&
    <LineChart 
      bezier
      data={ data }
      withDots={ false }
      chartConfig={{
        backgroundColor: COLORS.orange,
        backgroundGradientFrom: COLORS.orange,
        backgroundGradientTo: COLORS.orange,
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 1
      }}
      width={Dimensions.get('window').width}
      height={220} />

export default Chart