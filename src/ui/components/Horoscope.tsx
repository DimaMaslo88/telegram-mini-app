import React, {useEffect} from 'react';
import {useAppDispatch} from "bll/store";
import {SetHoroscopeThunk} from "bll/thunks/Horoscope-thunk";

export const Horoscope = () => {
    const dispatch = useAppDispatch()
    // useEffect(()=>{
    //     dispatch(SetHoroscopeThunk())
    // },[])
    return (
        <div>
Привет
        </div>
    );
};

