import React, {Component} from 'react'
import {
	View,
	Text
} from 'react-native'
import styles from './styles'

class MainFrame extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	getBodyContent() {
		return this.props.children ? this.props.children : null;
	}

	render() {
		return (
			<View style={styles.container}>
				{this.getBodyContent()}
			</View>
		)
	}
}

export default MainFrame;