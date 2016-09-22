"use strict";
var redux_1 = require('redux');
var headerService_1 = require('./headerService');
exports.makeRootReducer = function (asyncReducers) {
    // -	--------- Add Reducers Here ---------- //
    if (!asyncReducers.location) {
        asyncReducers.location = headerService_1.locationReducer;
    }
    return redux_1.combineReducers(asyncReducers);
};
//# sourceMappingURL=mainReducer.js.map