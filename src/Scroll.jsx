import React from 'react';

const customStyle = {
  height: '600px',
  overflowY: 'scroll',
  border: '1px solid black',
}

const Scroll = (props) => {
  console.log(props)
  return (
    <div style={customStyle}>
      {props.children}
    </div>
  )
}

export default Scroll;