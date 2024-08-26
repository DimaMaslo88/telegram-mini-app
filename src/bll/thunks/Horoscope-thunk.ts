import { AppThunkType } from "bll/store";
import {HoroscopeApi} from "dal/api/horoscope-api";
import {setHoroscope} from "bll/actions/horoscope-action";

export const SetHoroscopeThunk =(params:{language:string,period:string}): AppThunkType=>async (dispatch)=>{

    try{
        const res = await HoroscopeApi.getAllSigns(params)
        console.log(res,"RES")
        dispatch(setHoroscope(res.data))
    }catch (err){
        console.log(err)
    }finally {
        console.log('good')
    }

}
