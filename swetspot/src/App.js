import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
function App() {
  return (
 
    <>
    <Router>
      <Navbar/>
      
      <Switch>
        <Route path = "/" exact component = {Home}></Route>
        <Route path = "/contact-us" exact component = {Contact}></Route>
      </Switch>
      </Router>
      </>
  
  );
}

export default App;
