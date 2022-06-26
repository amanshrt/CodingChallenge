

export const selectAudio = (data, navigation) => {
  try {
    navigation.navigate("Detail", { ...data })
    audioAction(data, 'PLAY');
  return true;
  }
  catch (e) { 
    return false
  }
};

export const audioAction = (data, event) => {
  console.log(data, event);
};
