import React from 'react'
import PropTypes from "prop-types";

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

Coords.propTypes = {
    fullName: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string
  };