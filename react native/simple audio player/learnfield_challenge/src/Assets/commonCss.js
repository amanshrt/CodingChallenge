import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
console.log(Colors);
const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.darker,
    padding: 10,
  },
  txt_sm: {
    fontSize: 10,
  },
  txt_lg: {
    fontSize: 30,
    margin: 5,
  },
  txt_md: {
    fontSize: 20,
    margin: 3,
  },
  txt_bl: {
    color: 'black',
  },
  txt_wt: {
    color: Colors.white,
  },
  txt_center: {
    textAlign: 'center',
  },
  tinyLogo: {
    height: 220,
    marginBottom: 12,
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: Colors.dark,
  },
  largeLogo: {
    height: 400,
    marginBottom: 12,
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: Colors.dark,
  },
  image: {
    height: 180,
    width: '100%',
  },
  largeImage: {
    height: 400,
  },
  linearGradient: {
    height: '100%',
    width: '100%',
  },
});

export default CommonStyles;