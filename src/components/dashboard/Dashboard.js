
import React, { useEffect, useState } from 'react'

import '../dashboard/dashboard.css';
import Navbar from '../navbar/Navbar'
import About from '../pages/About';
import Shop from '../pages/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TemporaryDrawer from '../drawer/Drawer'
import TableComponent from '../tables/MoMComponent';
import axios from '../../data/axios';
import Upload from '../upload/Upload'
import AWS from 'aws-sdk';
import HappinessIndex from '../happinessIndex/HappinessIndex'
import TrendingTopics from '../trendingTopics/TrendingTopics'
import Transcription from '../transcription/Transcription';
import Loader from 'react-loader-spinner';
import '../dashboard/loading.css'
import MinutesOfMeeting from '../mom/MinutesOfMeeting';
import MoMComponent from '../tables/MoMComponent';
import TranscriptionComponent from '../tables/TranscriptionComponent';


function Dashboard() {

  const [isLoading, setLoading] = useState(true)
  const [clicked, handleClick] = useState(false)
  const [results, setResults] = useState([]);
  const [dataPoints, setDataPoints] = useState([]);

  var count = 0
  useEffect(() => {
    axios
      .get(`/items`)
      .then(res => {
        res.data.Items.forEach(element => {
          const parsed = AWS.DynamoDB.Converter.unmarshall(element)
          setResults(prevResults => ([...prevResults, parsed]))
          setDataPoints(prevResults => ([...prevResults, { y: parsed.happinessIndex, label: parsed.id, x : count++ }]))
        });         

        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (isLoading ? <div className="Loading">
    <Loader type="ThreeDots" color="#2BAD60" />
  </div > : <div className="Dashboard">
      <Navbar isClicked={clicked} clickHandler={handleClick} history={window.history} />
      <TemporaryDrawer isClicked={clicked} clickHandler={handleClick} />
      <Router>
        <Switch>
          <Route path="/dashboard" exact component={() => <MoMComponent results={results} />} />
          <Route path="/dashboard/transcriptions" exact component={() => <TranscriptionComponent results={results} />} />
          <Route path="/dashboard/upload" component={Upload} />
          <Route path="/dashboard/happinessIndex" component={() => <HappinessIndex dataPoints={dataPoints} />} />
          <Route path="/dashboard/trendingTopics" component={() => <TrendingTopics results={results} />} />
          <Route path="/dashboard/transcription" component={() => <Transcription/>} />
          <Route path="/dashboard/mom" component={() => <MinutesOfMeeting/>} />
          <Route path="/dashboard/about" component={About} />
          <Route path="/dashboard/contact" component={Shop} />
        </Switch>
      </Router>
    </div>)
}
export default Dashboard;