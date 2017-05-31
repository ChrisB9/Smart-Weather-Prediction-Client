import React, {Component} from 'react'
import {
	View,
	Text
} from 'react-native'
import styles from './styles'
/*import SvgUri from 'react-native-svg-uri'
<SvgUri
  source={require('../../images/rain.svg')}
/>*/

import {SunSvg} from './SvgObjects'

class TrendCard extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	renderTrendData(data) {
		if (Object.keys(data).length === 0)
			return (
				<View style={styles.title}>
					<Text style={styles.titleText}>loading...</Text>
				</View>
			)
		return (
			<View style={styles.content}>
				<View style={styles.data}>
					<Text>Brightness: {data.brightness} lux</Text>
					<Text>Humidity: {data.humidity}%</Text>
					<Text>Temperature: {data.temperature} °C</Text>
					<Text>Pressure: {data.pressure} hPa</Text>
				</View>
				<View style={styles.title}>
					<Text style={styles.titleText}>Now</Text>
				</View>
			</View>
		)
	}

	render() {
		return (
			<View style={styles.trendCardContainer}>
				<View style={styles.trendCard}>
					<View style={styles.icon}>
						<SunSvg width="86" height="60" radius="20" />
					</View>
					{this.renderTrendData(this.props.trendData)}
				</View>
			</View>
		)
	}
}

export default TrendCard;