import React from 'react';

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
