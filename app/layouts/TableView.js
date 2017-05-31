import React, {Component} from 'react';
import {
  MainFrame,
  Navigation,
  ContentBox,
  TrendCard,
  TableBox
} from '../components';
import {Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {fetchListOfWeatherObjects, fetchLatestForecast} from '../actions/actions'


class TableView extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchListOfWeatherObjects());
    this.props.dispatch(fetchLatestForecast());
  }

  onPress() {
    console.log("hello")
  }

  render() {
    return (
      <MainFrame>
        <Navigation title="History" press={this.props.onPress.bind(this, "navigationview")}/>
        <ContentBox press={this.onPress}>
          <ScrollView>
            <TableBox tableData={this.props.getWeatherData.data}/>
          </ScrollView>
          <TrendCard trendData={this.props.getForecast.latestForecast} />
        </ContentBox>
      </MainFrame>
    );
  }
}

export default connect((state) => {
  const {getWeatherData, getForecast} = state;
  return {getWeatherData, getForecast}
})(TableView)
