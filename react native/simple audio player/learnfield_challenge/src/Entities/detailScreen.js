import * as React from 'react';
import {Text, View, StyleSheet, ScrollView, Button} from 'react-native';
import CommonStyles from '../Assets/commonCss';
import { Header } from "./../Components/Header";
import Player from '../Components/Player';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function DetailScreen(props) {
  const { title } = props.route.params;
  return (
    <View
      style={(CommonStyles.container, styles.layout)}
      contentContainerStyle={{justifyContent: 'center'}}>
      <Header />
        <Text style={(CommonStyles.txt_lg, CommonStyles.txt_center)}>
          {title}
        </Text>
        <Player data={props.route.params} />
      <Button
        color={Colors.black}
        title="Back"
        onPress={() => props.navigation.navigate('Welcome')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: 'black',
    flex: 1,
  }
});

export default DetailScreen;
