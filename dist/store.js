"use strict";
var redux_1 = require('redux');
var mainReducer_1 = require('./mainReducer');
/* Store Enhancers
  -----------------------  Store Enhancers not woring with Angular 2 Observables
  const enhancers = []
  const devToolsExtension = window.devToolsExtension
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
*/
// Redux Middleware & Store Creation -----------------------  
//const middleWare = [thunk]; // Add new middleware here -----------
exports.store = redux_1.createStore(mainReducer_1.makeRootReducer({}) // <-- Empty object passed to represent expected asynReducers 
);
exports.store.asyncReducers = {};
//Hot Reloading of Redux Store----------------------- 
// if(module.hot) {
//   module.hot.accept('./mainReducer'), () => {
//     const nextReducer = require('./mainReducer').default;
//     store.replaceReducer(nextReducer);
//   }
// }
//# sourceMappingURL=store.js.map