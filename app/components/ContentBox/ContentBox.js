import React from 'react'
import {View} from 'react-native'
import styles from './styles'

const ContentBox = (props) {
	return <View style={styles.contentBox}>{props.children || null}</View>
}

export default ContentBox;
