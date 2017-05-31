import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/reducer'

const configuredStore = (preloadedState) => {
	return createStore(
		rootReducer,
		preloadedState,
		applyMiddleware(thunkMiddleware)
	)
}

export default configuredStore