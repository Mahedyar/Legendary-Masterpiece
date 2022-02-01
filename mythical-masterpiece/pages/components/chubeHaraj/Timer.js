import React from 'react'
import { useState, useEffect } from 'react';

const Timer = (props) => {
    const {initialMinute = 0,initialSeconds = 0} = props;
    const [hours , setHours] = useState(23)
    const [ minutes, setMinutes ] = useState(59);
    const [seconds, setSeconds ] =  useState(59);

    useEffect(()=>{
       setInterval(()=>{
           setSeconds(seconds -1)
       } , 1000)

       return ()=>{
           clearInterval
       }
                
        } , []);

       

    // useEffect(()=>{
    // let myInterval = setInterval(() => {
    //     console.log("ticking")
    //         if (seconds > 0) {
    //             setSeconds(seconds - 1);
    //         }
    //         if (seconds === 0) {
    //             if (minutes === 0) {
    //                 clearInterval(myInterval)
    //             } else {
    //                 setMinutes(minutes - 1);
    //                 setSeconds(59);
    //             }
    //         } 
    //     }, 1000)
    //     return ()=> {
    //         clearInterval(myInterval);
    //       };
    // });

    return (
        <div>
            
            <h1>{hours}:{minutes}:{seconds}</h1>
        {/* { minutes === 0 && seconds === 0
            ? null
            : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        } */}
        </div>
    )
}

export default Timer;