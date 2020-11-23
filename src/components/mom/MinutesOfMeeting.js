import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import '../transcription/Transcription.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


function MinutesOfMeeting(props) {
    const location = useLocation();

    useEffect(() => {
        console.log(location.state.detail)
    }, [])



    return (
        <div className="Transcription">
            <h1>{location.state.detail.id}</h1>
            <Container fixed>
                <Typography component="div" className="text">{location.state.detail.mom}</Typography>
            </Container>
        </div>

        // <div className="Transcription">

        //     
        // </div>
    )
}

export default MinutesOfMeeting
