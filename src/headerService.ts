
const initialState = {
	location: 'Home'
}
//Reducers
export const locationReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_LOCATION': 
			return (<any>Object).assign({}, state, {
				location: action.location
			});
			case 'RESET':
				return (<any>Object).assign({}, state, initialState);
		default :
			return state;
	}
}