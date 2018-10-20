import React from 'react';

import ImageContainer from './imageContainer';
import Description from './descriptionContainer';
import './product.css'

const product = (props)=>(
  <div className="product">
    <ImageContainer
    imgsrc={props.imgsrc}
    name={props.name}/>
    <Description
    name={props.name}
    num={props.num}
    price={props.price}/>
    <div className='clearfix'></div>
    <hr></hr>

  </div>
)

export default product;
