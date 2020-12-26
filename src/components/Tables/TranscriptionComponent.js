import React, { useEffect, useState } from 'react'
import './Sprints.css'
import sprints from '../../data/sprints.json'
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import { useHistory } from "react-router-dom";
import SearchBox from '../searchbar/SearchBox';

const TranscriptionComponent = (props) => {
  const history = useHistory();
  const {results,setTitle} = props
  const [ filteredResults, setFilteredResults] = useState(results)
  const [ searchField, setSearchField ] = useState('')


  useEffect(() => {
    setFilteredResults(results.filter(result => (
      result.id.toLowerCase().includes(searchField.toLowerCase()))))
  }, [searchField])

  function handleChange (e) {
    setSearchField(e.target.value)
  }

  useEffect(() => {
    setTitle("Transcriptions")
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
        <SearchBox placeholder="Enter date..." handleChange={handleChange} />
        <Row gutter={40}>
          {filteredResults.map(co =>
            <Col key={co.id} gutter={50}
              xs={{ span: 6 }} sm={{ span: 5 }} md={{ span: 5 }}
              lg={{ span: 5 }} xl={{ span: 4 }}
            ><div className="sprint" onClick={() => handleClick(co)}><div id="head">{co.id}</div><div id="body" >{co.transcription.substring(0, 250)+"..."}</div></div></Col>
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
  return (filteredResults ? showTables(filteredResults) : null)

}

export default TranscriptionComponent
