
import React, { useEffect, useState } from 'react'

import '../../App.css';
import Navbar from '../navbar/Navbar'
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TemporaryDrawer from '../drawer/Drawer'
import TableComponent from '../tables/TableComponent';
import axios from '../../data/axios';
import AWS from 'aws-sdk';
import HappinessIndex from '../happinessIndex/HappinessIndex'
import TrendingTopics from '../trendingTopics/TrendingTopics'
import Transcription from '../transcription/Transcription';


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
          <Route path="/dashboard/happinessIndex" component ={() => <HappinessIndex results={results}/>} />
          <Route path="/dashboard/trendingTopics" component ={() => <TrendingTopics results={results}/>} />
          <Route path="/dashboard/transcription" component ={() => <Transcription results={results}/>} />
        </Switch>
    </Router>
    </div>
  )
}
export default Dashboard;