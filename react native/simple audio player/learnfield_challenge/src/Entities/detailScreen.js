import * as React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import CommonStyles from '../Assets/commonCss';
import Section from '../Components/AudioList';
import { Header } from "./../Components/Header";
import Player from '../Components/Player';

function DetailScreen(props) {
  console.log("hey", props.route.params)
  const { audio, title,cover , totalDurationMs } = props.route.params;
  return (
    <ScrollView
      style={CommonStyles.container}
      contentContainerStyle={{justifyContent: 'center'}}>
      <Header />
      <Text style={CommonStyles.txt_lg, CommonStyles.txt_center}>{title}</Text>
      <Player data={ props.route.params}/>
      </ScrollView>
  );
}

const styles = StyleSheet.create({});

export default DetailScreen;
