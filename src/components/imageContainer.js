import React from 'react';

const imageContainer = (props) => {

  return (<div className="imageContainer">
    <img src={props.imgsrc} alt={props.name}/>
  </div>)
}

export default imageContainer;
