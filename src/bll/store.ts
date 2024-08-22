import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import {HoroscopeReducer} from "bll/reducers/HoroscopeReducer";
import thunk from "redux-thunk";



const rootReducer = combineReducers({
 horoscope: HoroscopeReducer,

});
export type StateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer,applyMiddleware(thunk));


// @ts-ignore
window.store = store;
