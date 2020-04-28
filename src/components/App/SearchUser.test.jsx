import React from 'react';
import { shallow } from 'enzyme';
import SearchUser from '../SearchUser.jsx';

describe('SearchUser', () => {
  it('displays an input field', () => {
    const wrapper = shallow(<SearchUser  />);
    expect(wrapper).toMatchSnapshot();
  });
});
