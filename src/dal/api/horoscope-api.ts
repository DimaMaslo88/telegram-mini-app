import {instance} from "dal/instance";

export const HoroscopeApi ={
 getAllSigns(params:{language:string,period:string}){
     return instance.post(`${params}`)
 }
}
