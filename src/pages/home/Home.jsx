import React from 'react';

// Components
import ProfileSide from'../../components/ProfileSide/ProfileSide';
import PostSide from '../../components/PostSide/PostSide';
import RightSide from '../../components/RightSide/RightSide';

// Styles
import './Home.css';

const Home = () => {
  return (
    <div className="home">
        <ProfileSide/>
        <PostSide/>
        <RightSide/>
    </div>
  )
}

export default Home