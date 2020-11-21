import React, { useEffect, useState } from 'react'

function TrendingTopics(props) {

    useEffect(() => {
        props.setTitle('Trending topics')
    }, [])


    return (
        <div>
           <h1>Trending Topics Page</h1> 
        </div>
    )
}

export default TrendingTopics