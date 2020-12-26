import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import '../transcription/Transcription.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


function Contact(props) {
    const location = useLocation();

  

    return (
        <div className="Transcription">
            <Container fixed>
                <Typography component="div" className="text">
                    H.R. Agile development and testing practices have worked wonders for innumerable organizations. Positive aspect of Agile are not hidden. They are very much evident in areas like the time to Market improved communications or lower costs. Many known Software professionals have had quite a success with the advantages of age in there, as there are a few who face the disadvantages. Two advantages of Agile models. Our consumer satisfaction by adapted continuous Delivery of usable Software, people and interactions are emphasized rather than processes and tools. Customers, developers and testers constantly interact with each other. Working Software is delivered frequently. Face to face conversation is the best form of communication close daily cooperation between Business people and developers. There is continuous attention to Technical excellence and a good design. The regular adaption. It's Done to changing circumstances. Even late changes In requirements are welcome. But Angel has a few disadvantages, too. In Case some Software deliverable, especially the large ones, it is difficult to assess the effort required at the beginning of the software development lifecycle. There is a lack of emphasis on necessary designing and documentation. On
                </Typography>
            </Container>
        </div>
    )
}

export default Contact
