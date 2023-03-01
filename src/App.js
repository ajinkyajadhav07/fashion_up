import React from 'react'
import Navbar from './Navbar';
import Login from './Login'
import Register from './Register';
import Signup from './Signup';
import Cart from './Cart';
import './style.css';
import Home from './Home';
import  {Fragment} from 'react';
import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {

  return(
  <>
  <Router>
      <Fragment>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}>
          
          </Route>
          <Route exact path='/Home' element={<Home/>}></Route>
          <Route exact path='/Login' element={<Login/>}/>
          <Route exact path='/Signup' element={<Signup/>}/>
          <Route exact path='/Cart' element={<Cart/>}/>
          <Route exact path='/Register' element={<Register/>}/>
          
        </Routes>
      </Fragment>
    </Router>



  
  </>

  );
  
}

export default App;
