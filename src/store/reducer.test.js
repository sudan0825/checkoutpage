import reducer from './reducer';

describe('reducer test', () => {
  it('should return the initial State', () => {
    expect(reducer(undefined, {})).toEqual({
      promotion: {
        discount: 0.1,
        HappyFriday: 0.15
      },
      discountValue: 0,
      errorMessage: ''
    })
  });

  it('should update state with discount value',()=>{
    expect(reducer({
      promotion: {
        discount: 0.1,
        HappyFriday: 0.15
      },
      discountValue: 0,
      errorMessage: ''
    },{
      type:'PROMOTION',
      code:'discount',
      beforeDiscountTotal:300

    })).toEqual({
      promotion: {
        discount: 0.1,
        HappyFriday: 0.15
      },
      discountValue: 30,
      errorMessage: ''
    })
  })
})
