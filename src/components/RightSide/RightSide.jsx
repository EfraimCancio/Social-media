import React from 'react';

// Components
import TrendCard from '../TrendCard/TrendCard';

//Icons and Images
import Home from '../../img/house.png';
import Noti from '../../img/bell-ringing.png';
import Comment from '../../img/chat-teardrop-dots.png';
import { Gear } from 'phosphor-react';

//Styles
import './RightSide.css';

const RightSide = () => {
  return (
    <div className="rightSide">
        <div className="navIcons">
            <img src={Home} alt="" />
            <Gear size={24}/>
            <img src={Noti} alt=""/>
            <img src={Comment} alt=""/>
        </div>

        <TrendCard />

        <div className="button rButton">
            Share
        </div>
    </div>
  )
}

export default RightSide