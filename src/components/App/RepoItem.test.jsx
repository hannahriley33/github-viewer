import React from 'react';
import { shallow } from 'enzyme';
import RepoItem from '../RepoItem.jsx';

describe('RepoItem', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<RepoItem repoName="Rick-Sanchez-App"
      url="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />);
    expect(wrapper).toMatchSnapshot();
  });
});
