// React Componentes and Hooks
import React from 'react';

// Components
import Post from '../Post/Post';

// Styles
import './Posts.css';

// Data
import { PostsData } from '../../data/postsData';

const Posts = () => {
  return (
    <div className="posts">
      {PostsData.map((post, id) => {
        return <Post data={post} id={id}/>
      })}     
    </div>
  )
}

export default Posts;