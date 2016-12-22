import React from 'react';
import moment from 'moment';

const Comments = (props) => {
  const {posts, isLoading} = props;
  let now = moment().format('DD/MM/YYYY');

  if(isLoading){
    return (<div>I am loading...</div>)
  }else{
    return (<div>{now}</div>)
  }
}

export default Comments;
