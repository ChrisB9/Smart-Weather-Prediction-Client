import React, {Component} from 'react'
import {
	View,
	Text,
	TouchableHighlight,
	Button
} from 'react-native'
import styles from './styles'

class Navigation extends Component {
	constructor(props) {
	  super(props);
	}

	getTitle() {
		return (
			<TouchableHighlight
				onPress={this.props.press}
		 		underlayColor="#fff">
		 		<Text style={styles.title}>{this.props.title}</Text>
		 	</TouchableHighlight>
		)
	}

	render() {
		return (
			<View style={styles.navigation}>
				{this.getTitle()}
			</View>
		)
	}
}

export default Navigation;