import React, {Component} from 'react'
import {
	TouchableHighlight,
	Text,
	View
} from 'react-native'
import styles from './styles'

class ContentBox extends React.Component {
	constructor(props) {
	  super(props);
	}

	getBodyContent() {
		return this.props.children ? this.props.children : null;
	}

	render() {
		// return (
		// 	<TouchableHighlight
		// 		onPress={this.props.press}
		// 		style={styles.contentBox}
		// 		underlayColor="#fff">
		// 		<View>{this.getBodyContent()}</View>
		// 	</TouchableHighlight>
		// )
		return <View style={styles.contentBox}>{this.getBodyContent()}</View>
	}
}

export default ContentBox;