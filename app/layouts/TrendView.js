import React, {Component} from 'react';
import {
  MainFrame,
  Navigation,
  ContentBox,
  TrendCard
} from '../components'
import {Text} from 'react-native'

export default class TrendView extends Component {
  onPress() {
    console.log("hello")
  }

  render() {
    return (
      <MainFrame>
        <Navigation title="Forecast" press={this.props.onPress.bind(this, "navigationview")}/>
        <ContentBox press={this.onPress}>
          <TrendCard />
          <TrendCard />
          <TrendCard />
        </ContentBox>
      </MainFrame>
    );
  }
}
