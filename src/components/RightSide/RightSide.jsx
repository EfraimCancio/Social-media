// React Componentes and Hooks
import React, {useState} from 'react';

// Components
import TrendCard from '../TrendCard/TrendCard';
import ShareModal from '../ShareModal/ShareModal';

//Icons and Images
import Home from '../../img/house.png';
import Noti from '../../img/bell-ringing.png';
import Comment from '../../img/chat-teardrop-dots.png';
import { Gear } from 'phosphor-react';

//Styles
import './RightSide.css';

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="rightSide">
      <div className="navIcons">
        <img src={Home} alt="" />
        <Gear size={24}/>
        <img src={Noti} alt=""/>
        <img src={Comment} alt=""/>
      </div>

      <TrendCard />
      <button className="button rButton" onClick={() => setModalOpened(true)}>
        Share
      </button> 
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    
    </div>
    
  )
}

export default RightSide