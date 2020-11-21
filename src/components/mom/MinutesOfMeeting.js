import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";

function MinutesOfMeeting(props) {
    const location = useLocation();

    useEffect(() => {
        console.log(location.state.detail)
    }, [])



    return (
        <div>
         <h1>MinutesOfMeeting Page</h1>   
        </div>
    )
}

export default MinutesOfMeeting
