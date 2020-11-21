import React, { useEffect, useState } from 'react'
import './Sprints.css'
import sprints from '../../data/sprints.json'
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import { useHistory } from "react-router-dom";




const MoMComponent = (props) => {
  const history = useHistory();
  const { results } = props

  function handleClick(props) {
    history.push({
      pathname: '/dashboard/mom',
      state: { detail: props }
    })
  }

  function showTables(props) {
    console.log(props)
    return (
      <div className="content-table">
        <Row gutter={40}>
          {props.map(co =>
            <Col gutter={50}
              xs={{ span: 6 }} sm={{ span: 5 }} md={{ span: 5 }}
              lg={{ span: 5 }} xl={{ span: 4 }}
            ><div className="sprint" onClick={() => handleClick(co)}><div id="head">{co.id}</div><div id="body" >{co.mom.substring(0,250)+"..."}</div></div></Col>
          )}
        </Row>

      </div>
    );
  }

  // fetch(sign_in, {
  //     mode: 'cors',
  //     credentials: 'include',
  //     method: 'GET',
  //     headers: headers
  // })
  return (results ? showTables(results) : null)

}

export default MoMComponent
