import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Nav.css'

function Nav(props) {

    const [showHandle , setShowHandle] = useState(false);
    const[avatar , setAvatar] = useState(false)

    const avatarClickHandler = () =>{
      setAvatar( (prev) => !prev)
    }

    const transitionNavBar = () =>{
             if(window.scrollY > 100){
                setShowHandle(true)
             }
             else{
                setShowHandle(false)
             }
            
    }

    useEffect( () =>{
        window.addEventListener('scroll' , transitionNavBar);

        return ()=> { window.removeEventListener('scroll' , transitionNavBar)}
    } , [])

  return (
   

    <div className={`nav ${showHandle ? 'nav_black' : ''}`}>
        <div className='nav_contents'>
            <img className='nav_logo' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt=''/>
            <img onClick={avatarClickHandler} className='nav_avatar' src='https://pbs.twimg.com/media/FbWfoMNWYAAlVqD.png' alt=''/>
            <ul className={avatar ? 'dropDown' : 'hideDropdown'}>
              <NavLink style={
                {
                  color: 'white',
                  textDecoration: 'None'

                }
              }  to='/'>Home</NavLink>
              <li onClick={props.logoutHandler}>LogOut</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav;