import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const ImageContainer = ({source}) => {
  return (
    <View style={styles.container}>
      <Image
        source={
          source
            ? {uri: source, cache: 'only-if-cached'}
            : require('../assets/placeholder.png')
        }
        resizeMode="cover"
        style={{width: 100, height: 100}}
        onError={e => console.log('error', e)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    // borderRadius: 50,
    // borderWidth: 1,
    backgroundColor: 'primary',
    justifyContent: 'center',
    alignContent: 'center',
    position: 'relative',
  },
});
export default ImageContainer;
