/*
 * TODO: DataProvider
 */

import React, {Component} from 'react'
import {
	View,
	Text,
  Dimensions
} from 'react-native'
import styles from './styles'
import Svg, {Polyline, G, Line} from 'react-native-svg'

const data = [
  [0,120],
  [20,60],
  [40,80],
  [60,20],
  [80,80],
  [100,80],
  [120,60],
  [140,100],
  [160,90],
  [180,80],
  [200,110],
  [220,10],
  [240,70],
  [260,100],
  [280,100],
  [300,40],
  [320,0],
]

class ChartBox extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

  getData(array) {
    return array.map(
      (e) => e.join(",")
    ).join(" ")
  }

	render() {
		return (
			<View className={styles.container}>
				<Svg className={styles.chart}
          height="300"
          width="400">
            <G stroke="#aaa" strokeDasharray="0" strokeWidth="1">
              <Line x1="0" x2="390" y1="290" y2="290"></Line>
            </G>
            <G stroke="#aaa">
              <Line x1="10" x2="10" y1="0" y2="300"></Line>
            </G>
            <Polyline
              points={this.getData(data)}
              fill="none"
              stroke="#898886"
              strokeWidth="2"
          />
        </Svg>
			</View>
		)
	}
}

export default ChartBox;