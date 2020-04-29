import React from 'react';
import { shallow } from 'enzyme';
import UserDisplay from '../UserDisplay';

describe('UserDisplay', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<UserDisplay name="Rick" followers="2" following="3" url="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />);
    expect(wrapper).toMatchSnapshot();
  });
});
