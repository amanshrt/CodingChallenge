import React from 'react';
import renderer from 'react-test-renderer';
import Section from '../src/Components/Section/index';

test('renders correctly', () => {
  const tree = renderer.create(<Section title="Step One" />).toJSON();
  expect(tree).toMatchSnapshot();
});
