import * as React from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import CommonStyles from '../Assets/commonCss';
import {useDispatch, useSelector} from 'react-redux';
import Section from '../Components/AudioList';
import { Header } from '../Components/Header';

function WelcomeScreen(navigation) {
  const songs = useSelector((state) => state.audio.songs);
  return (
    <ScrollView
      style={CommonStyles.container}
      contentContainerStyle={{justifyContent: 'center'}}>
      <Header/>
      <Text style={CommonStyles.txt_md}> Recommended Audio Files</Text>
      {songs.map((song, index) => (
        <Section key={index} data={song} />
      ))}
    </ScrollView>
  );
}

export default WelcomeScreen;
