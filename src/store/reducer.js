import {deepcopyObj} from '../deepcopyObj'

const initialState = {
  promotion: {
    discount: 0.1,
    HappyFriday: 0.15
  },
  discountValue: 0,
  errorMessage: ''
}

const applyCouponReducer = (state = initialState, action) => {
  let discount = 0,
    error = "";
    let originalTotal=action.beforeDiscountTotal?action.beforeDiscountTotal:0;
  if (action.type === 'PROMOTION') {

    for (let i in state.promotion) {
      if (i === action.code) {
        discount = state.promotion[i];
        console.log(discount);
      }
    }
  }
  if (discount === 0 && originalTotal!==0) {
    error = "It is not a valid promotion code"
  }


  return deepcopyObj(state, {
    discountValue: discount * originalTotal,
    errorMessage: error
  })

}

export default applyCouponReducer;
