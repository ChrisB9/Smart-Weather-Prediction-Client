import React from 'react'
import {View} from 'react-native'
import styles from './styles'

const MainFrame = (props) {
	return <View style={styles.container}>{props.children || null}</View>
}

export default MainFrame;
