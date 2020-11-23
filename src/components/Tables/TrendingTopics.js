import React, { useEffect, useState } from 'react'
import './Sprints.css'
import sprints from '../../data/sprints.json'
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import { useHistory } from "react-router-dom";

const TrendingTopics = (props) => {
    const history = useHistory();
    const { results, setTitle } = props

    useEffect(() => {
        setTitle("Trending topics")
    }, [])

    function handleClick(props) {
        history.push({
            pathname: '/dashboard/transcription',
            state: { detail: props }
        })
    }

    function showTables(props) {
        return (
            <div className="content-table">
                <Row gutter={40}>
                    {results.map(co =>
                        <Col gutter={50}
                            xs={{ span: 6 }} sm={{ span: 5 }} md={{ span: 5 }}
                            lg={{ span: 5 }} xl={{ span: 4 }}
                        ><div className="sprint"><div id="head">{co.id}</div><div id="body" ><ul className="trendingTopics">{co.trendingTopics.map(t =><li>{t}</li>)}</ul></div></div></Col>
                    )}
                </Row>

            </div>
        );
    }

    return (results ? showTables(results) : null)

}

export default TrendingTopics
