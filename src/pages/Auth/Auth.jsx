import React from 'react'

// Images
import Logo from '../../img/logo.png'

// Styles
import './Auth.css'

const Auth = () => {
  return (
    <div className="auth">
        <div className="aLeft">
            <img src={Logo} alt="" />
            <div className="webName">
                <h1>Efras Tube</h1>
                <h6>Explore the ideas throughout the world</h6>
            </div>
        </div>
        <LogIn/>
    </div>
  )
}

function LogIn() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
        </div>

        <div>
            <span style={{ fontSize: "12px" }}>
              Don't have an account Sign up
            </span>
            <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
}

function SignUp() {
  return(
    <div className="a-rigth">
      <form className="infoForm authForm">
        <h3>Sing up</h3>

        <div>
          <input 
            type="text" 
            placeholder="First Name" 
            className='infoInput' 
            name='firstname'
          />
          <input 
            type="text" 
            placeholder="Last Name" 
            className='infoInput' 
            name='lastname'
          />
        </div>

        <div>
          <input 
            type="text" 
            className="infoInput" 
            placeholder="Usernames" 
            name="Usernames"
          />
        </div>

        <div>
          <input 
            type="text" 
            className="infoInput" 
            placeholder="Password" 
            name="password"
          />
          <input 
            type="text" 
            className="infoInput" 
            placeholder="Confirm password" 
            name="confirmpass"
          />
        </div>

        <div>
            <span style={{fontSize: '12px'}}>
              Already have an account. Login!
            </span>
        </div>
        <button className="button infoButton">SignUp</button>
      </form>
    </div>
  )
}

export default Auth