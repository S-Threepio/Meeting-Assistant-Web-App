import React, { useRef, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TemporaryDrawer from './components/Drawer/drawer'
import TableComponent from './components/Tables/TableComponent';


function Dashboard() {


  const [clicked, handleClick] = useState(false)

  return (
    <div className="App">
      <Router>
      <Navbar isClicked={clicked} clickHandler={handleClick} />
      <TemporaryDrawer isClicked={clicked} clickHandler={handleClick} />
        <Switch>
          <Route path="/dashboard" exact component={TableComponent} />
          <Route path="/dashboard/about"  component={About} />
          <Route path="/dashboard/contact" component={Shop} />
        </Switch>
    </Router>
    </div>
  )
}
export default Dashboard;







// const Home = () => {
//   return (
//     <div>
//       <h1>Home Page</h1>
//     </div>
//   )
// }