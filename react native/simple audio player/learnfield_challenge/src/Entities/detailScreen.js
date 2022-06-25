import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import CommonStyles from '../Assets/commonCss';

function DetailScreen() {
  console.log('should ')
  return (
    <View>
      <Text style={CommonStyles.txt_bl_sm}>Describe the details</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default DetailScreen;
