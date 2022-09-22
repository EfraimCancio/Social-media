// React Componentes and Hooks
import React from 'react';

// Icons
import ChatTeardropDots from '../../img/chat-teardrop-dots.png';
import Share from '../../img/share.png';
import Heart from '../../img/heart.png';
import ThumbsDown from '../../img/thumbs-down.png';

// Styles
import './Post.css';

const Post = ({data}) => {
  return (
    <div className="post">
        <img src={data.img} alt="" />

        <div className="postReact">
            <img src={ data.liked? Heart : ThumbsDown} alt="" />
            <img src={ ChatTeardropDots } alt="" />
            <img src={ Share } alt="" />
        </div>

        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>

    </div>
  )
}

export default Post;