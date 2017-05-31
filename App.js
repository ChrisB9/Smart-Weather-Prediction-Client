import React, {Component} from 'react'
import {
  TableView,
  TrendView,
  GraphView,
  NavigationView
} from './app/layouts'
import {Text, View } from 'react-native'
import {openSocketConnection} from './app/actions/api'
import configuredStore from './app/store/store'
import { Provider } from 'react-redux'

const store = configuredStore()

export default class App extends Component {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this)
        this.state = {
            currentView: 'navigationview',
            weatherdata: [{
                "brightness":0,
                "date":"2017-04-07 22:33:29",
                "deleted":0,
                "humidity":75,
                "id":2025,
                "pressure":1024,
                "sensorObjectId":1,
                "temperature":6.64
            }]
        };
    }

    componentDidMount() {
        openSocketConnection((data) => {
            this.setState(data)
        }, this.state.weatherdata);
    }

    onPress(view) {
        this.setState({currentView: view})
    }

    renderView(view) {
        switch (view) {
            case 'tableview':
                return <TableView socketData={this.state.weatherdata} onPress={this.onPress}/>
            case 'trendview':
                return <TrendView onPress={this.onPress}/>
            case 'graphview':
                return <GraphView onPress={this.onPress}/>
            case 'navigationview':
            default:
                return <NavigationView data="hello" onPress={this.onPress} />

        }
    }

    render() {
        return (
            <Provider store={store}>
                {this.renderView(this.state.currentView)}
            </Provider>
        );
    }
}
