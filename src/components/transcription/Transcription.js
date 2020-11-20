import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";

function Transcription(props) {
    const location = useLocation();

    useEffect(() => {
        console.log(location.state.detail)
    }, [])



    return (
        <div>
         <h1>Transcription page</h1>   
        </div>
    )
}

export default Transcription
