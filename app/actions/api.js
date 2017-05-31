import SocketIOClient from 'socket.io-client';

const url = 'https://cben.co';
const socket = SocketIOClient(url+':8099');
const apiUri = '/swp2';
const dataLimit = 100;

const openSocketConnection = (callback, currentState) => {
	socket.on("weatherdata", (data) => {
		console.log(callback, currentState)
        currentState.push(data["new_val"]);
        callback({weatherdata: currentState});
    });
}

// const openSocketConnection = () => {getListOfWeatherObjects().then(response => console.log(response))}

const getListOfWeatherObjects = () => fetch(url+apiUri+'/weather?limit='+dataLimit)

const getWeatherObject = (id) => fetch(url+apiUri+'/weather/'+id)

const getForecastingFor = (x, regressionType = 'all') => {
	switch (regressionType) {
		case 'linear':
			return fetch(url+apiUri+'/vorhersager/regression/l/'+x)
		case 'quadratic':
			return fetch(url+apiUri+'/vorhersager/regression/q/'+x)
		case 'all':
		default:
			return fetch(url+apiUri+'/vorhersager/regression/a/'+x)
	}
}

const getLatestForecasting = () => fetch(url+apiUri+'/vorhersager/regression')

const getForecastingList = (limit) => fetch(url+apiUri+'/vorhersager/regression/'+limit)

export {
	openSocketConnection,
	getWeatherObject,
	getListOfWeatherObjects,
	getForecastingList,
	getForecastingFor,
	getLatestForecasting
};