/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import SoundPlayer from 'react-native-sound-player';
import renderer from 'react-test-renderer';
jest.mock('react-native-sound-player', () => {});
it('renders correctly', () => {
  renderer.create(<App />);
});
