

export const selectAudio = (data, navigation) => {
    navigation.navigate("Detail", {...data})
  audioAction(data, 'PLAY');
};

export const audioAction = (data, event) => {
  console.log(data, event);
};
