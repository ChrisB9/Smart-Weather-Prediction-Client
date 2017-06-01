/*
 * TODO: DataProvider
 */

import React, {Component} from 'react'
import {
	View,
	Text
} from 'react-native'
import ChartView from 'react-native-highcharts'
import styles from './styles'

const Highcharts = 'Highcharts'
const conf= (load, formatter, series) => {
	return {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: load
            }
        },
        title: {
            text: 'Live data'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: 'Value'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: formatter
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'current data',
            data: series
        }]
    }
}

const ChartBox = ({load, formatter, series}) => {
	return (
		<View className={styles.container}>
			<ChartView config={conf(load, formatter, series)}></ChartView>
		</View>
	)
}


export default ChartBox;
