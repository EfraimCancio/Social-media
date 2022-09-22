import React from 'react'

// App Components
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import PostSide from '../../components/PostSide/PostSide';
import RightSide from '../../components/RightSide/RightSide';

// Styles
import './Profile.css'

const Profile = () => {
  return (
    <div className="profile">
        <ProfileLeft/>

        <div className="profileCenter">
          <ProfileCard/>
          <PostSide/>
        </div>

        <RightSide/>
    </div>
  )
}

export default Profile