import React from 'react';
import {Link} from 'react-router-dom'
function Post( props ) {
  return (
    <>
        <div>
            <h1>{props.title}</h1>
            <img style={{padding: "5%"}} width="100%" src={props.src}/>
            <p>{props.description}</p>
            <p>User post: <Link to="/user">{props.user}</Link></p>
        </div>
    </>
  )
}

export default Post