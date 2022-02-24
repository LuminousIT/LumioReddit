import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import ThumbnailImage from '../assets/thumbnail.jpg';

const ImageContainer = ({source}) => {
  const [fetched, setFectched] = useState(false);

  const _onLoadSuccessful = () => {
    setFectched(true);
  };
  const _onLoadFailed = () => {
    setFectched(false);
  };
  return (
    <View style={styles.container}>
      <Image
        source={{uri: source}}
        resizeMode="cover"
        resizeMethod="scale"
        style={{
          width: '100%',
          height: '100%',
          // opacity: fetched ? 1 : 0,
          opacity: 1,
        }}
        onLoad={_onLoadSuccessful}
        onError={_onLoadFailed}
      />
      {/* <View style={([styles.thumbnailContainer], {opacity: fetched ? 1 : 0})}>
        <Image source={require('../assets/thumbnail.jpg')} resizeMode="cover" />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: 'primary',
    justifyContent: 'center',
    alignContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    // borderColor: '#f9f9f0',
  },
  thumbnailContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});
export default ImageContainer;
