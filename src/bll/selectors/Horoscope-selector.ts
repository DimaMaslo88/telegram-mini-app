import {StateType} from "bll/store";
import {HoroscopeType} from "types/StateTypes";

export const selectHoroscopeLanguageSelector =(state:StateType):string=>state.horoscope.language
export const selectHoroscopePeriodSelector =(state:StateType):string=>state.horoscope.period
export const selectHoroscopeSelector =(state:StateType):HoroscopeType[]=>state.horoscope.horoscope
