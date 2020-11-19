
import React, { useEffect, useState } from 'react'

import '../dashboard/dashboard.css';
import Navbar from '../navbar/Navbar'
import About from '../pages/About';
import Shop from '../pages/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TemporaryDrawer from '../drawer/Drawer'
import TableComponent from '../tables/TableComponent';
import axios from '../../data/axios';
import Upload from '../upload/Upload'
import AWS from 'aws-sdk';
import HappinessIndex from '../happinessIndex/HappinessIndex'
import TrendingTopics from '../trendingTopics/TrendingTopics'
import Transcription from '../transcription/Transcription';
import Loader from 'react-loader-spinner';
import '../dashboard/loading.css'


function Dashboard() {

  const [isLoading, setLoading] = useState(true)
  const [clicked, handleClick] = useState(false)
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`/items`)
      .then(res => {
        res.data.Items.forEach(element => {
          setResults(prevResults => ([...prevResults, AWS.DynamoDB.Converter.unmarshall(element)]))
        });
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (isLoading ? <div className="Loading">
    <Loader type="ThreeDots" color="#2BAD60"/>
  </div > : <div className="Dashboard">
      <Navbar isClicked={clicked} clickHandler={handleClick} history={window.history}/>
      <TemporaryDrawer isClicked={clicked} clickHandler={handleClick} />
      <Router>
        <Switch>
          <Route path="/dashboard" exact component={() => <TableComponent results={results} />} />
          <Route path="/dashboard/about" component={About} />
          <Route path="/dashboard/contact" component={Shop} />
          <Route path="/dashboard/upload" component={Upload} />
          <Route path="/dashboard/happinessIndex" component={() => <HappinessIndex results={results} />} />
          <Route path="/dashboard/trendingTopics" component={() => <TrendingTopics results={results} />} />
          <Route path="/dashboard/transcription" component={() => <Transcription results={results} />} />
        </Switch>
      </Router>
    </div>)
}
export default Dashboard;