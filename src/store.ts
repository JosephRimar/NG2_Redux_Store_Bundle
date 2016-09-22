import {
  applyMiddleware, // Use with Redux-thunk for async actions
  Store, // Interface for TypeScript
  compose,
  createStore
} from 'redux';

import { makeRootReducer } from './mainReducer';

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
export const store:any = createStore(
  makeRootReducer({}) // <-- Empty object passed to represent expected asynReducers 
  //compose(applyMiddleware(...middleWare)) <-- Redux-Thunk fails with typescript
);

store.asyncReducers = {};

 //Hot Reloading of Redux Store----------------------- 
// if(module.hot) {
//   module.hot.accept('./mainReducer'), () => {
//     const nextReducer = require('./mainReducer').default;
//     store.replaceReducer(nextReducer);
//   }
// }
