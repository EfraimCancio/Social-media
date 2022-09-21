import React from 'react';

//Components
import LogoSearch from '../logoSearch/LogoSearch';
import ProfileCard from '../profileCard/ProfileCard';
import FollowersCard from '../followersCard/FollowersCard';

//Styles
import './ProfileSide.css'

const ProfileSide = () => {
  return (
    <div className="profileSide">
        <LogoSearch/>
        <ProfileCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileSide