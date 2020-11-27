import React from 'react';
import renderer from 'react-test-renderer';

import JobDescriptionScreen from '../JobDescriptionScreen';

describe('<JobDescriptionScreen />', () => {
  it('has 1 child', () => {
    const route = { params: { jobDesc: 'Mock Job Description' } };
    const tree = renderer.create(<JobDescriptionScreen route={route} />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
