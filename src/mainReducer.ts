import { combineReducers } from 'redux';
import { locationReducer } from './headerService';


export const makeRootReducer = (asyncReducers:any) => {		
		// -	--------- Add Reducers Here ---------- //
		if(!asyncReducers.location) {
			asyncReducers.location = locationReducer
		}
		
	return combineReducers(asyncReducers);
} 