import React from 'react'

export const ImageAvatar = props => {
    return (
    <>
        <img src={`/img/${props.children}`}/>
    </>
  )
}
