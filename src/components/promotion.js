import React from 'react';

//promotion component. It will
const promotion =(props)=>{


    return (<div className='promotion'>
        <div>
          <div>Promo Code</div>
          <input type="text" onChange={props.promochage} value={props.value}/>
          <button onClick={props.applyPromo}>Apply</button>
          <div className='clearfix'></div>
        </div>

      </div>)

}
export default promotion;
