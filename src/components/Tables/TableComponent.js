import React from 'react'
import './Sprints.css'
import sprints from '../../data/sprints.json'
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import { useState } from 'react';
import { Opacity } from '@material-ui/icons';


const TableComponent = () => { 

  function handleClick(props){
    alert("sprint "+props+" is clicked")
  }


  return (
      <div class="content-table">
<Row gutter={40}>
  {sprints.map(co => 
    <Col gutter={50}
      xs={{ span: 6 }} sm={{ span: 5 }} md={{ span: 5 }}
      lg={{ span: 5 }} xl={{ span: 4 }}
     ><div class="sprint" onClick={()=>handleClick(co.name)}><div id="head">{co.name}</div><div id="body" >{co.data}</div></div></Col>
  )}
</Row>
      
      </div>
    );
  }
  
export default TableComponent
