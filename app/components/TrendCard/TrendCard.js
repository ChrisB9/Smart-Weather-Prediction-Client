import React from 'react'
import {
	View,
	Text
} from 'react-native'
import styles from './styles'
import {SunSvg, RainSvg} from './SvgObjects'

const TrendCard = ({trendData, trendTitle}) => {
	return (
		<View style={styles.trendCardContainer}>
			<View style={styles.trendCard}>
				{renderTrendData(trendData, trendTitle)}
			</View>
		</View>
	)
}

const renderIcon = (humidity) => {
	if (humidity > 50)
		return <RainSvg width="86" height="60" radius="20" />
	return <SunSvg width="86" height="60" radius="20" />
}

const renderTrendData = (data, trendTitle) => {
	if (Object.keys(data).length === 0)
		return (
			<View style={styles.title}>
				<Text style={styles.titleText}>loading...</Text>
			</View>
		)
	return (
		<View style={styles.icon}>
			{renderIcon(data.humidity)}
		</View>
		<View style={styles.content}>
			<View style={styles.data}>
				<Text>Brightness: {data.brightness} lux</Text>
				<Text>Humidity: {data.humidity}%</Text>
				<Text>Temperature: {data.temperature} °C</Text>
				<Text>Pressure: {data.pressure} hPa</Text>
				<Text>Cloudiness: {data.cloudiness}%</Text>
				<Text>Windspeed: {data.windspeed} m/s</Text>
				<Text>Winddirection: {data.winddirection} °</Text>
			</View>
			<View style={styles.title}>
				<Text style={styles.titleText}>{trendTitle || "now"}</Text>
			</View>
		</View>
	)
}

export default TrendCard;
