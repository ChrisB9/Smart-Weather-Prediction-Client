import React from 'react'
import {
	View,
	Text,
	TouchableHighlight,
	Button
} from 'react-native'
import styles from './styles'

const getTitle = (press, title) => {
	return (
		<TouchableHighlight
			onPress={press}
			underlayColor="#fff">
			<Text style={styles.title}>{title}</Text>
		</TouchableHighlight>
	)
}

const Navigation = ({press, title}) => {
	return (
		<View style={styles.navigation}>
			{getTitle()}
		</View>
	)
}

export default Navigation;
