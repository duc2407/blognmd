import React from 'react'
import Post from '../Post'

function About(props) {
  return (
    <div>

        <Post 
            title={props.title} 
            description={props.description}
            src={props.src} 
            user={props.user}>
        </Post>
    </div>
  )
}

export default About