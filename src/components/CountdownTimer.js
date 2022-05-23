import { fontStyle } from '@mui/system';
import React from 'react';
import { useTimer } from 'react-timer-hook';
import '../styles/fonts.css'

function CountdownTimer({ expiryTimestamp }) {
    const {
        seconds,
        minutes,
        hours,
        days,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '15px', fontFamily: "Source Code Pro, monospace"}}>
                <span>Next drop in </span>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
        </div>
    );
}

export default CountdownTimer
