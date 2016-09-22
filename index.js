exports.store = require('./dist/store').store;
exports.locationReducer = require('./dist/headerService').locationReducer;
exports.InjectReducer = require('./dist/injectReducer').InjectReducerService;
exports.makeRootReducer = require('./dist/mainReducer').makeRootReducer;