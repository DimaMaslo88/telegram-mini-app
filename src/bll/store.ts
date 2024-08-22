import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import {HoroscopeReducer, HoroscopeReducerActionsType} from "bll/reducers/HoroscopeReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";



const rootReducer = combineReducers({
 horoscope: HoroscopeReducer,

});
export type StateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer,applyMiddleware(thunk));
export type ActionStateType = HoroscopeReducerActionsType
export type AppDispatch = ThunkDispatch<StateType,
    undefined,
    ActionStateType>;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    StateType,
    undefined,
    ActionStateType>;

// @ts-ignore
window.store = store;
