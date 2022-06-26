import React, { useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import CommonStyles from '../../Assets/commonCss';
import LinearGradient from 'react-native-linear-gradient';
import SoundPlayer from 'react-native-sound-player';
import Toast from 'react-native-toast-message';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Progress from 'react-native-progress';
import { useDispatch } from 'react-redux';
import { changeSongsStatus } from '../../Config/Slice/audio';

const Player = ({ data }) => {
  const dispatch = useDispatch();
  const [stat, setStat] = useState(false);
  const [progress, setProgress] = useState(0);
    useEffect(() => {
        onPressPlayButton();
      setStat(true);
      SoundPlayer.addEventListener('FinishedPlaying', () => setStat(false));
   }, [])
   
    const playPause = () => { 
        !stat ? onPressPlayButton() : onPressPauseButton(); 
    }

    const playSound = () => {
        try {
          SoundPlayer.playUrl(data.audio);
        } catch (e) {
            Toast.show({
              type: 'error',
              text1: 'Error!',
              text2: 'Can\'t play this file',
            });
        }
     }

     const  getInfo=  async() =>{ 
            try {
            const info = await SoundPlayer.getInfo() 
              setProgress(info.currentTime/info.duration)
            } catch (e) {
              Toast.show({
                type: 'error',
                text1: 'Error!',
                text2: "Error playing file",
              }); 
            }
  }

  const onPressPlayButton = () => {
    dispatch(
      changeSongsStatus({
        song: data.title,
        status : "play",
        duration: progress,
      }),
    );
        playSound();
        setInterval(() => {
            getInfo();
        }, 1000);
    
        setStat(true);
      }
    
  const onPressPauseButton = () => { 
      dispatch(
        changeSongsStatus({
          song: data.title,
          status: 'pause',
          duration: progress,
        }),
      );
        SoundPlayer.pause();
        setStat(false);
    }

  return (
    <View style={{flex: 1}}>
      <View>
        <ImageBackground
          style={CommonStyles.largeImage}
          source={{uri: data.cover}}>
          <LinearGradient
            colors={['#00000000', '#000000']}
            style={CommonStyles.linearGradient}></LinearGradient>
        </ImageBackground>
      </View>
      <Progress.Bar progress={progress} width={null} />
      <TouchableOpacity onPress={playPause} style={styles.buttonsGroup}>
         <Icon name={stat ? 'pause' : 'play'} size={50} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.black,
    height: 50,
    zIndex: 3,
  },
});
   

export default Player;
