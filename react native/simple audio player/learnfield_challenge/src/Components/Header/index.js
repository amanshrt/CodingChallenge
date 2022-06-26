import * as React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import CommonStyles from '../../Assets/commonCss';
export const Header = (props) => {
  return (
    <View style={styles.logoContainer}>
      
      <Image
        style={styles.logo}
        source={require('./../../Assets/image/logo.png')}
      />
      <Text style={CommonStyles.txt_lg}> Learnfield GMbh</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
  },
  logoContainer: {
    heigth: 120,
    flexDirection: 'row',
    alignContent: 'center',
  },
});
