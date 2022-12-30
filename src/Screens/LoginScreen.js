import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen'

function LoginScreen(props) {
const[signIn , setSignIn] = useState(false)

  return (
    
    <div className='loginScreen'>
        <div className='loginScreen_background'>
            <img className='loginScreen_logo' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='' />
            {!signIn && <button onClick={ () => {setSignIn(true) }} className='loginScreen_button'>Sign In</button>}
            <div className='loginScreen_gradient'></div>
        </div>
        <div className='loginScreen_body'>
        {
      signIn ? <SignUpScreen isLoggedIn={props.isLoggedIn}/> :
      <>
      <h1>
        Unlimited films, TV programmes and more.
      </h1>
      <h2>
        Watck anywhere. Cancel at any time
      </h2>
      <h3>
        Ready to Watch? Enter your email to create or restart your membership
      </h3>
      <div className='loginScreen_input'>
        <form>
          <input type='email' placeholder='Email address'/>
          <button onClick={ () => setSignIn(true) } className='loginScreen_getStarted'>GET STARTED</button>
        </form>
      </div>

      </>
    }
    </div>
    </div>
  )
}

export default LoginScreen;