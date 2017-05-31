import * as api from './api'

export const GET_WEATHEROBJECT = 'GET_LISTOFWEATHEROBJECT'
export const GET_LISTOFWEATHEROBJECTS = 'GET_LISTOFWEATHEROBJECTS'
export const GET_FORECASTINGLIST = 'GET_FORECASTINGLIST'
export const GET_FORECASTINGFOR = 'GET_FORECASTINGFOR'
export const GET_LATESTFORECASTING = 'GET_LATESTFORECASTING'
export const GET_REQUEST = 'GET_REQUEST'

export const getRequest = (status) => {
	return {
		type: GET_REQUEST,
		status
	}
}



export const getWeatherObject = (weatherobject, data) => {
	return {
		type: GET_LISTOFWEATHEROBJECT,
		weatherobject,
		data
	}
}

export const getListOfWeatherObjects = (data) => {
	return {
		type: GET_LISTOFWEATHEROBJECTS,
		data
	}
}

export const getLatestForecasting = (latestForecast) => {
	return {
		type: GET_LATESTFORECASTING,
		latestForecast
	}
}

export const getForecastingList = (limit, data) => {
	return {
		type: GET_FORECASTINGLIST,
		limit,
		data
	}
}

export const getForecastingFor = (x, regressionType, data) => {
	return {
		type: GET_FORECASTINGFOR,
		x,
		regressionType,
		data
	}
}

export const shouldFetch = (state, action) => {
	const {data, type, started} = state
	if (action === type) {
		if (!data) {
			return true
		}
		if (started) return false
	}
	return false
}

export const fetchWeatherObjectsIfNeeded = () => {
	return (dispatch, getState) => {
		if (shouldFetch(getState(), GET_LISTOFWEATHEROBJECTS)) {
			return dispatch(fetchListOfWeatherObjects)
		}
	}
}

export const fetchListOfWeatherObjects = () => {
	return dispatch => {
		dispatch(getRequest(true))
		return api.getListOfWeatherObjects()
			.then(response => response.json())
			.then(json => {
				dispatch(getRequest(false))
				return dispatch(getListOfWeatherObjects(
					json.map((el) => JSON.parse(el))
				))
			})
	}
}

export const fetchLatestForecast = () => {
	return dispatch => {
		return api.getLatestForecasting()
			.then(response => response.json())
			.then(json => dispatch(getLatestForecasting(JSON.parse(json))))
	}
}