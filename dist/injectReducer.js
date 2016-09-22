"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var mainReducer_1 = require('./mainReducer');
var InjectReducerService = (function () {
    function InjectReducerService() {
    }
    InjectReducerService.prototype.injectReducer = function (store, key, reducer) {
        store.asyncReducers[key] = reducer;
        store._store.replaceReducer(mainReducer_1.makeRootReducer(store.asyncReducers));
    };
    InjectReducerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], InjectReducerService);
    return InjectReducerService;
}());
exports.InjectReducerService = InjectReducerService;
//# sourceMappingURL=injectReducer.js.map