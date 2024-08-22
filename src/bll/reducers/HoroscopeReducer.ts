import {HoroscopeStateTypes} from "types/StateTypes";
import {SetHoroscopeType} from "bll/actions/horoscope-action";


const horoscopeInitialState = {
    language:  '' ,
    period: '',
    horoscope:[]
}
export type HoroscopeReducerActionsType = SetHoroscopeType
export const HoroscopeReducer =(state:HoroscopeStateTypes=horoscopeInitialState,action:HoroscopeReducerActionsType):HoroscopeStateTypes=>{
    switch (action.type){
        case "SET-HOROSCOPE":{
            return {...state,...action.data}
        }
        default:return state
    }

}
