import React, {Component} from 'react';
import {connect} from 'react-redux';
import Product from '../components/product'
import Promotion from '../components/promotion';
import "./checkout.css"
import data from '../data';

export class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      zip: 94085,
      subtotal: 0,
      pickup: 3.85,
      taxrate: 9.00,
      codevalue: '',
      showItemdetails: false,
      showPromo: false

    };


  }
  //set state when component is mounted
  componentDidMount() {

    this.initialState();

  }
  //initial check out page with items
  initialState() {
    let totalcost = 0;
    data.forEach((item) => {
      totalcost += (item.price * item.quantity)
    });

    this.setState({data: data, subtotal: totalcost})
  }
  //show items detail or apply promotion codes


  showContent(e) {

    if (e.target.innerHTML.indexOf('details') > 0) {

      this.setState({
        showItemdetails: !this.state.showItemdetails
      });
    }

    if (e.target.innerHTML.indexOf('promotion') > 0) {

      this.setState({
        showPromo: !this.state.showPromo
      });
    }

  }

  // get the estimation total cost
  estTotal() {
    return (this.state.subtotal * (1 + this.state.taxrate / 100) + this.state.pickup - this.props.discountValue).toFixed(2);
  }
  //set codevlue when the input field is changed
  promochage(e) {

    this.setState({codevalue: e.target.value, inputAction: true})
    if (e.target.value.length === 0) {
      this.props.applyPromo()
    }
  }
  render() {
    let items = [];
    if (this.state.data.length) {

      this.state.data.forEach((item, index) => {

        items.push(<Product key={index} imgsrc={item.image} name={item.name} num={item.quantity} price={item.price}/>)
      })
    }

    return (<div className="checkout">
      <h1>Check  Out</h1>
      <div>
        <p>Subtotal</p>
        <p>
          ${this.state.subtotal.toFixed(2)}</p>
      </div>
      <div>
        <p className="pickup">Pickup Saving
          <span className="tooltip">Picking Up your order in the store helps cut costs, and we pass the saving on to you.</span>
        </p>
        <p style={{
            color: 'red'
          }}>
          -${this.state.pickup}
        </p>
      </div>
      <div>
        <p>Est. taxes&fees (Based on {this.state.zip})</p>
        <p>
          ${(this.state.taxrate * this.state.subtotal / 100).toFixed(2)}</p>
      </div>
      {
        this.props.discountValue
          ? (<div>
            <p>Discount</p>
            <p style={{
                color: 'red'
              }}>-${this.props.discountValue.toFixed(2)}</p>
          </div>)
          : null
      }
      <div>
        <hr></hr>
      </div>
      <div>
        <p>Est. Total</p>
        <p>${this.estTotal()}</p>
      </div>
      <div  className="interactiveText" onClick={(e) => this.showContent(e)}>{
          this.state.showItemdetails
            ? <div>Hide item details
                <span>-</span>
                {items}
              </div>
            : <div className="testSample">Show item details<span>+</span>
              </div>
        }</div>
      <div className="interactiveText" onClick={(e) => this.showContent(e)}>{
          this.state.showPromo
            ? <div >Hide promotion code
                <span>-</span>
                <Promotion promochage={(e) => this.promochage(e)} value={this.state.codevalue} applyPromo={() => this.props.applyPromo(this.state.subtotal, this.state.codevalue)}/>
              </div>
            : <div >Apply promotion code<span>+</span>
              </div>
        }

      </div>
      <div style={{
          color: 'red',
          display: 'block'
        }}>{this.props.error}</div>
    </div>)
  }
}

//map the state to props in redux
const mapDiscountToProps = state => {
  return {discountValue: state.discountValue, error: state.errorMessage}
}
//map actions to props in redux
const mapApplyPromoToProps = dispatch => {
  return {
    applyPromo: (subtotal, code) => dispatch({type: 'PROMOTION', beforeDiscountTotal: subtotal, code: code})
  }
}
export default connect(mapDiscountToProps, mapApplyPromoToProps)(Checkout);
