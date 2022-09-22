import React from 'react';

// Components
import LogoSearch from '../logoSearch/LogoSearch';
import FollowersCard from '../followersCard/FollowersCard';
import InfoCard from '../InfoCard/InfoCard';

const ProfileLeft = () => {
  return (
    <div className="profileSide">
        <LogoSearch/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileLeft