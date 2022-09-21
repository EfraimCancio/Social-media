import React from 'react'

//Images
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profile.jpeg'

//Styles
import './ProfileCard.css'

const ProfileCard = () => {
  return (
    <div className="profileCard">
        <div className="profileImages">
            <img src={Cover} alt=""/>
            <img src={Profile} alt=""/>
        </div>

        <div className="profileName">
            <span>Efraim Cancio</span>
            <span>Frontend Developer</span>
        </div>

        <div className="followStatus">
            <hr/>
            <div>
                <div className="follow">
                    <span>6,894</span>
                    <span>Followers</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>1</span>
                    <span>Following</span>
                </div>
            </div>
            <hr/>
        </div>

        <span>
            My Profile
        </span>
    </div>
  )
}

export default ProfileCard