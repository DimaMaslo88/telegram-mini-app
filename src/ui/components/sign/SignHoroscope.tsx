import React from 'react';
import {HoroscopeType} from "types/StateTypes";

export const SignHoroscope = ({title}:HoroscopeType) => {
    return (
        <div>
            {title}
        </div>
    );
};
