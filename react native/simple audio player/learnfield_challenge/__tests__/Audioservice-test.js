import React from 'react';
import renderer from 'react-test-renderer';
import Section from "./../src/Components/AudioList/index";
import { selectAudio } from "./../src/Components/AudioList/audioService";
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import SoundPlayer from 'react-native-sound-player';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});
jest.mock('react-native-sound-player', () => {});

test('renders correctly', () => {
  var data = {
    title: 'abc',
    cover: null,
    totalDurationMs: 1,
  };
  const tree = renderer.create(<Section data={data} />).toJSON();
  // expect(text).toHaveTextContent("data.title")
  //Another way to match snapshot
  expect(tree).toMatchSnapshot();
});


describe('Select the audio file and navigate to the screen 2', () => {
  test('passing audio file and navigation props', () => {
     var data = {
       title: 'abc',
       cover: null,
       totalDurationMs: 1,
     };
     const navigation = {
       navigate: jest.fn(),
     };
    const res = selectAudio(data, navigation);
    expect(res).toBe(true);
  });
});