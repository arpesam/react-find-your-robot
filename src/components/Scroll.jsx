import React from 'react';

const customStyle = {
  height: '2000px',
  overflowY: 'scroll',
  border: '2px solid black',
}

const Scroll = (props) => {
  return (
    <div style={customStyle}>
      {props.children}
    </div>
  )
}

export default Scroll;