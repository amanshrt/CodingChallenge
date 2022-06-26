import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity, 
} from 'react-native';
import CommonStyles from '../../Assets/commonCss';
import LinearGradient from "react-native-linear-gradient";
import { selectAudio } from "./audioService";
import { useNavigation } from '@react-navigation/native';


const Section = ({ data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={CommonStyles.tinyLogo} onPress={()=> selectAudio(data ,navigation) }>
      <ImageBackground style={CommonStyles.image} source={{uri: data.cover}}>
        <LinearGradient
          colors={['#000000', '#00000000']}
          style={CommonStyles.linearGradient}></LinearGradient>
        <Text
          style={(CommonStyles.txt_bl, CommonStyles.txt_sm, styles.overlay)}>
          {data.totalDurationMs + 'ms'}
        </Text>
      </ImageBackground>
      <Text testID='data-render'
        style={
          (CommonStyles.txt_bl, CommonStyles.txt_lg, CommonStyles.txt_center)
        }>
        {data.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position : "absolute",
    right: 10,
  }
});

export default Section;
