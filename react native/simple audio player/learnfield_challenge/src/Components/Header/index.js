import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import CommonStyles from '../../Assets/commonCss';
export const Header = () => {
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
    width: 100,
    height: 100,
  },
  logoContainer: {
    heigth: 120,
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    width : 120
  },
});
