import React from 'react';
import ProfileSide from'../../components/profileSide/ProfileSide';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
        <ProfileSide/>
        <div className="postSide">Pòst</div>
        <div className="rightSide">Rigth side</div>
        
    </div>
  )
}

export default Home