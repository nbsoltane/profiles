import React from 'react'

export const Coords = (props) => {
    function handleName (user) {
        alert (`Hello ${user}`)
    }
  return (
    <div>
        <h2>{props.fullName}</h2>
        <p className="job">{props.profession}</p>
        <p className="bio">{props.bio}</p>
        <button onClick={() => handleName(props.fullName)}>Click Me !</button> 
    </div>
  )
}
