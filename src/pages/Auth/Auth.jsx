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

        <h1>Form</h1>
    </div>
  )
}

export default Auth