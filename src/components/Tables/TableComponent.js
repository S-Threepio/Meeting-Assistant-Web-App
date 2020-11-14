import React, { useEffect, useState } from 'react'
import './Sprints.css'
import sprints from '../../data/sprints.json'
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import axios from '../../data/axios';
import AWS from 'aws-sdk';


const TableComponent = () => {
  const [results, setResults] = useState([]);

  function handleClick(props) {
    alert("sprint " + props + " is clicked")
    console.log(props)
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
            ><div className="sprint" onClick={() => handleClick(co.id)}><div id="head">{co.id}</div><div id="body" >{co.mom}</div></div></Col>
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


  useEffect(() => {
    axios
      .get(`/items`)
      .then(res => {
        res.data.Items.forEach(element => {
          setResults(prevResults => ([...prevResults, AWS.DynamoDB.Converter.unmarshall(element)]))  
        });
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (results ? showTables(results) : null)

}

export default TableComponent
