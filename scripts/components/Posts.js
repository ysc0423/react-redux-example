import React from 'react';
import styles from '../assests/site.scss';

const Posts = (props) => {
  const {posts, isLoading} = props;

  if(isLoading){
    return (<div>I am loading...</div>)
  }else{
    return (
      <div>
        <div>{posts.length} Posts</div>
      </div>)
  }
}

export default Posts;
