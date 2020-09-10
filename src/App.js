import React ,{useRef,useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TemporaryDrawer from './components/Drawer/drawer';

function App() {

  
  const [clicked,handleClick] = useState(false)

  return (
    <div className="App">
        <Navbar isClicked={clicked} clickHandler={handleClick}  />
        <TemporaryDrawer isClicked={clicked} clickHandler={handleClick} />
    </div>
  )}
export default App;





//     <Router>
//       <div className="App">
//         <Nav />
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/about" component={About} />
//           <Route path="/contact" component={contact us} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// const Home = () => {
//   return (
//     <div>
//       <h1>Home Page</h1>
//     </div>
//   )
// }