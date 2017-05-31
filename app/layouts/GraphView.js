import React, {Component} from 'react';
import {
  MainFrame,
  Navigation,
  ContentBox,
  TrendCard,
  ChartBox
} from '../components'
import {Text} from 'react-native'

export default class GraphView extends Component {
  onPress() {
    console.log("hello")
  }

  render() {
    return (
      <MainFrame>
        <Navigation title="Noworrow" press={this.props.onPress.bind(this, "navigationview")}/>
        <ContentBox press={this.onPress}>
          <ChartBox />
          <TrendCard />
        </ContentBox>
      </MainFrame>
    );
  }
}
