import React from 'react';


//resuable product decription container 
const description =(props)=>(

  <div className="description">
    <h3>{props.name}</h3>
    <p><span>$</span> {props.price}</p>
    <p><span>Qty:</span> {props.num}</p>
  </div>
)

export default description;
