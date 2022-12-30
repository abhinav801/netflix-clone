import React, { useRef, useState } from 'react'
import './SignUpScreen.css'

function SignUpScreen( props) {

    const[emailisValid , setEmailisValid] = useState(true)
    const[passwordisValid , setPasswordisValid] = useState(true)

    const emailUserInput = useRef();
    const passwordUserInput = useRef();


    const register = (e) => {
        e.preventDefault();
    }
    const signIn = (e) =>{
        e.preventDefault();
        let email = emailUserInput.current.value;
        let password = passwordUserInput.current.value;
        //Email validation
        if(email.trim() !=='' && email.includes('@') && email.includes('.'))
        setEmailisValid(true)
        else{
            setEmailisValid(false)
            return
        }
        
        //PassWord validation
        if(password.trim() !=="" && password.length > 6)
        setPasswordisValid(true)
        else{
            setPasswordisValid(false)
            return
        }

        props.isLoggedIn(true)
    }

  return (
    <div className='signupScreen'>
        <form>
            <h1>Sign In</h1>
            {!emailisValid && <p>!Please enter a valid Email</p>}
            <input ref={emailUserInput} type='email' placeholder='Email'/>
            {!passwordisValid && <p>Length must be grater than 6 character</p>}
            <input ref={passwordUserInput} type='password' placeholder='Password' />
            <button onClick={signIn}>Sign In</button>

            <h5> <span className='signupScreen_gray'>New to Netflix? </span>
            <span className='signupScreen_link' onClick={register}>Sign Up now.</span></h5>
        </form>
    </div>
  )
}

export default SignUpScreen;