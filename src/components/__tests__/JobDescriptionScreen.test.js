import React from 'react';
import renderer from 'react-test-renderer';

import JobDescriptionScreen from '../JobDescriptionScreen';

describe('<JobDescriptionScreen />', () => {
  const route = { params: { jobDesc: 'Mock Job Description' } };
  it('has 1 child', () => {
    const tree = renderer.create(<JobDescriptionScreen route={route} />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<JobDescriptionScreen route={route} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
