import * as React from 'react';
import {  Text, View, StyleSheet } from 'react-native';
import CommonStyles from '../Assets/commonCss';

function WelcomeScreen() {
  return (
    <View>
      <Text style={CommonStyles.txt_wt_sm}>Welcome to the good night</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    
});

export default WelcomeScreen;
