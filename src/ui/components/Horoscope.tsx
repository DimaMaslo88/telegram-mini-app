import React, {useEffect} from 'react';
import {useAppDispatch} from "bll/store";
import {SetHoroscopeThunk} from "bll/thunks/Horoscope-thunk";
import {useSelector} from "react-redux";
import {
    selectHoroscopeLanguageSelector,
    selectHoroscopePeriodSelector,
    selectHoroscopeSelector
} from "bll/selectors/Horoscope-selector";
import {HoroscopeType} from "types/StateTypes";

import {v1} from "uuid";
import {SignHoroscope} from "ui/components/sign/SignHoroscope";

export const Horoscope = () => {
    const dispatch = useAppDispatch()
    const language = useSelector(selectHoroscopeLanguageSelector)
    const period = useSelector(selectHoroscopePeriodSelector)
    const horoscope = useSelector(selectHoroscopeSelector)
    useEffect(() => {
        dispatch(SetHoroscopeThunk({language, period}))
    }, [])
    return (
        <div>
            {horoscope.map(
                ({title}: HoroscopeType
                ) => (
                    <div key={v1()}>
                    <SignHoroscope title={title} />
                    </div>
                ))}
        </div>
    );
};

