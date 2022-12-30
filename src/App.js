import React, { useState } from 'react';
import HomeScreen from './Screens/HomeScreen';
import './App.css'
import LoginScreen from './Screens/LoginScreen';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Poster from './Poster';


function App() {
const lcl_str_login_info = localStorage.getItem('loggedIn');


const[loggedIn , setLoggedIn] = useState(false)
const isLoggedIn = (data) =>{
    setLoggedIn(data);
    localStorage.setItem('loggedIn', data);
}

const logoutHandler = () =>{

  console.log('Inside logOut handler')
  setLoggedIn(false)
  localStorage.clear()
}
  //const user = null;
  return (
    <div className='app'>
     {
      loggedIn  || lcl_str_login_info? <Router>
      <Switch>
      <Route exact path='/'>
        <HomeScreen logoutHandler={logoutHandler}/>
        </Route>
        <Route path='/poster'>
          <Poster/>
        </Route>
      </Switch>
     </Router> : <LoginScreen isLoggedIn = {isLoggedIn}/>
     }
     
    </div>
  );
}

export default App;
