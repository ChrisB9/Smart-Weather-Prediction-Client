import React, {Component} from 'react';
import {
  MainFrame,
  Navigation,
  ContentBox
} from '../components'
import {Button, View, Text} from 'react-native'

export default class NavigationView extends Component {

	constructor(props) {
	  super(props);
	}

  render() {
    return (
      <MainFrame>
        <Navigation title="Navigation" press={this.props.onPress.bind(this, "navigationview")}/>
        <ContentBox>
	        <Button onPress={this.props.onPress.bind(this, "tableview")} title="History Data"/>
          <Button onPress={this.props.onPress.bind(this, "tableview")} title="Current Data"/>
          <Button onPress={this.props.onPress.bind(this, "sensorlistview")} title="SensorList View"/>
          <Button onPress={this.props.onPress.bind(this, "graphview")} title="Chart View"/>
          <Button onPress={this.props.onPress.bind(this, "trendview")} title="Trending"/>
          <Button onPress={this.props.onPress.bind(this, "liveview")} title="Live Data"/>
        </ContentBox>
      </MainFrame>
    );
  }
}