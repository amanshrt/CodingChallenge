import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import CommonStyles from '../../Assets/commonCss';
import LinearGradient from 'react-native-linear-gradient';
import Sound from "react-native-sound";

const Player = ({data}) => {
  return (
    <TouchableOpacity
      style={CommonStyles.largeLogo}
      onPress={() => selectAudio(data, navigation)}>
      
      <ImageBackground
        style={CommonStyles.largeImage}
        source={{uri: data.cover}}>
        <LinearGradient
          colors={['#000000', '#00000000']}
          style={CommonStyles.linearGradient}></LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    bottom: 100,
    },
});

export default Player;
