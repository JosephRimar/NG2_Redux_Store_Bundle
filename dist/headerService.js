"use strict";
var initialState = {
    location: 'Home'
};
//Reducers
exports.locationReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'SET_LOCATION':
            return Object.assign({}, state, {
                location: action.location
            });
        case 'RESET':
            return Object.assign({}, state, initialState);
        default:
            return state;
    }
};
//# sourceMappingURL=headerService.js.map