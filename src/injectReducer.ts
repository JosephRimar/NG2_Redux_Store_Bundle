import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { makeRootReducer } from './mainReducer';


@Injectable()
export class InjectReducerService {

	injectReducer(store,  key, reducer ) {
		store.asyncReducers[key] = reducer
  	store._store.replaceReducer(makeRootReducer(store.asyncReducers))
	}
}