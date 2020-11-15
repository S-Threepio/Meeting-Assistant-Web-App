
import React, { useEffect, useState } from 'react'

import './App.css';
import Navbar from './components/Navbar/Navbar'
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TemporaryDrawer from './components/Drawer/drawer'
import TableComponent from './components/Tables/TableComponent';
import axios from '../src/data/axios';
import AWS from 'aws-sdk';


function Dashboard() {


  const [clicked, handleClick] = useState(false)
  const [results, setResults] = useState([]);

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

  return (
    <div className="App">
      <Navbar isClicked={clicked} clickHandler={handleClick} />
      <TemporaryDrawer isClicked={clicked} clickHandler={handleClick} />
      <Router>
        <Switch>
          <Route path="/dashboard" exact component={() => <TableComponent results={results}/>}  />
          <Route path="/dashboard/about"  component={About} />
          <Route path="/dashboard/contact" component={Shop} />
        </Switch>
    </Router>
    </div>
  )
}
export default Dashboard;