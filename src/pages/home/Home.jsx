import React from 'react';

// Components
import ProfileSide from'../../components/profileSide/ProfileSide';
import PostSide from '../../components/postSide/PostSide';

// Styles
import './Home.css';

const Home = () => {
  return (
    <div className="home">
        <ProfileSide/>
        <PostSide/>
        <div className="rightSide">Rigth side</div>
        
    </div>
  )
}

export default Home