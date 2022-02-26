import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

function CacheData({cacheData = [], handleCacheSelect}) {
  return (
    <>
      {cacheData.length > 1 && (
        <View style={styles.cacheContainer}>
          {cacheData.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleCacheSelect(item)}
              style={styles.itemContainer}>
              <Text style={styles.item}> {item} </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  cacheContainer: {
    // width: '100%',
    borderWidth: 1,
    borderColor: '#c4c4c4',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 80,
    zIndex: 9000000000,
    backgroundColor: '#fff',
    maxHeight: 150,
    overflow: 'scroll',
    marginHorizontal: 10,
    flexShrink: 1,
    opacity: 0.9,
  },
  itemContainer: {
    padding: 5,
    paddingVertical: 5,
  },
  item: {
    color: '#000',
  },
});
export default CacheData;
