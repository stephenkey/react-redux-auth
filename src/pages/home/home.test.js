import React from 'react';
import { expect } from 'chai';
import { mount, configure } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../redux/store'
import Home from './home';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('The home page', () => {  
  it('renders <Home /> component', () => {
    const wrapper = mount(<Provider store={store}><Home /></Provider>);
    expect(wrapper.contains(<p className="home">Home</p>)).to.equal(true);
  });
});