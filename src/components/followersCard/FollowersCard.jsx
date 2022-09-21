import React from 'react';

//Data
import { Followers } from '../../data/followersData';

// Styles
import './FollowersCard.css'

const FollowersCard = () => {
  return (
    <div className="followersCard">
        <h3 className="fTitle">Who is following you</h3>
            
        {Followers.map((follower, id) => { 
           return(
                <div className="follower">
                    <div>
                        <img src={follower.img} className="followerImg" alt="Foto"/>
                        <div className="name">
                            <span>{follower.name}</span>
                            <span>@{follower.username}</span>
                        </div>
                    </div>
                    <button className="button fc-button">
                        Follow
                    </button>
                </div>
            ) 
        })}
    </div>

  )
}

export default FollowersCard