import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Checkout} from './Checkout';
import Promotion from '../components/promotion';
import Product from '../components/product';

configure({adapter: new Adapter()});

describe('<Checkout />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Checkout/>);
  })

  it('it should has no <Product> element at initial state', () => {
    expect(wrapper.find(Product)).toHaveLength(0)

  })
  it('it should has 3 elements if "see item details" is clicked', () => {

    wrapper.setState({showItemdetails:true})
    expect(wrapper.find(Product)).toHaveLength(3);

  })
  it('it should has no <Promotion> element at initial state', () => {
    expect(wrapper.find(Promotion)).toHaveLength(0)

  })
  

})
