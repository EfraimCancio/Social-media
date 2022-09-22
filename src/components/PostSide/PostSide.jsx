// React Componentes and Hooks
import React from 'react';;

// Componentes
import PostShare from '../PostShare/PostShare';
import Posts from '../Posts/Posts';

// Styles
import './PostSide.css';

const PostSide = () => {
  return (
    <div className="postSide">
        <PostShare/>
        <Posts/>
    </div>
  )
}

export default PostSide;