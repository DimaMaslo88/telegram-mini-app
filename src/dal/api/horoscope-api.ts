import axios from "axios";

export const HoroscopeApi ={
 getAllSigns(params:{language:string,period:string}){
     return axios.post(`https://poker247tech.ru/get_horoscope/`,params)

 }
}
