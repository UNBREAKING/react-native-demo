import { connect } from 'react-redux';
import { weekChartGenerator } from './helpers';
import Chart from './Chart';

const mapStateToProps = ({
  arrayOfDaylyWeight: {
    daylyWeights
  } = {}
}) => ({
  daylyWeights,
  data: {
    labels: weekChartGenerator(daylyWeights),
    datasets: [{
      data: daylyWeights
    }]
  }
})

export default connect(mapStateToProps)(Chart)