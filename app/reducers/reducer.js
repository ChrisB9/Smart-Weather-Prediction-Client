import { combineReducers } from 'redux'
import {
	GET_WEATHEROBJECT,
	GET_LISTOFWEATHEROBJECTS,
	GET_FORECASTINGLIST,
	GET_FORECASTINGFOR,
	GET_LATESTFORECASTING,
	GET_REQUEST
} from '../actions'

const getRequest = (state = {started: false}, action) => {
	switch (action.type) {
		case GET_REQUEST:
			return Object.assign({}, state, {started: true})
		default:
			return state
	}
}

const getForecast = (state = {data: [], latestForecast: {}}, action) => {
	switch (action.type) {
		case GET_FORECASTINGFOR:
			return Object.assign({}, state, {
				data: action.data,
				x: action.x,
				regressionType: action.regressionType
			})
		case GET_FORECASTINGLIST:
			return Object.assign({}, state, {
				data: action.data,
				limit: action.limit
			})
		case 'GET_LATESTFORECASTING':
			return Object.assign({}, state, {
				latestForecast: action.latestForecast
			})
		default:
			return state
	}
}

const getWeatherData = (state = {data: []}, action) => {
	switch (action.type) {
		case GET_WEATHEROBJECT:
			return Object.assign({}, state, {
				weatherobject: action.weatherobject,
				data: action.data
			})
		case GET_LISTOFWEATHEROBJECTS:
			return Object.assign({}, state, {
				data: action.data
			})
		default:
			return state
	}
}

export default combineReducers({
	getWeatherData,
	getForecast,
	getRequest
})