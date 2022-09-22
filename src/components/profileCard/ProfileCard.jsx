import React from 'react'

//Images
import Cover from '../../img/cover.jpg'
import ProfileImg from '../../img/profile.jpg'

//Styles
import './ProfileCard.css'

const ProfilePage = true;

const ProfileCard = () => {
  return (
    <div className="profileCard">
        <div className="profileImages">
            <img src={Cover} alt=""/>
            <img src={ProfileImg} alt=""/>
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

                {ProfilePage &&(
                    <>
                        <div className="vl"></div>
                        <div className="follow">
                            <span>3</span>
                            <span>Posts</span>
                        </div>
                    </>
                )}
            </div>
            <hr/>
        </div>

        {ProfilePage ?'' : <span>My Profile</span>}
    </div>
  )
}

export default ProfileCard