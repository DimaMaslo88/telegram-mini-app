import {HoroscopeStateTypes} from "types/StateTypes";


const horoscopeInitialState = {
    language:  '' ,
    period: '',
    horoscope:[]
}

export const HoroscopeReducer =(state:HoroscopeStateTypes=horoscopeInitialState,action:any):HoroscopeStateTypes=>{
    switch (action.type){
        default:return state
    }

}
