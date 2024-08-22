import {HoroscopeStateTypes} from "types/StateTypes";

export type SetHoroscopeType = ReturnType<typeof setHoroscope>
export const setHoroscope =(data:HoroscopeStateTypes)=>{
  return {
      type:"SET-HOROSCOPE",
      data
  }

}
