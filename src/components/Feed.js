import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {processDate} from '../utils.js';
import ImageProp from './ImageContainer';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMessage, faCaretSquareUp} from '@fortawesome/free-regular-svg-icons';

const Feed = ({item, handleOnItemSelect}) => {
  return (
    <TouchableOpacity
      onPress={() => handleOnItemSelect(item.url)}
      style={styles.feedContainer}>
      <View style={styles.imgContainer}>
        <ImageProp source={item.media?.oembed?.thumbnail_url} />
      </View>

      <View style={styles.subContainer}>
        <Text
          style={[
            styles.text,
            {
              textAlign: 'right',
              color: '#c4c4c4',
              fontSize: 10,
              marginBottom: 5,
            },
          ]}>
          {processDate(item.created)}
        </Text>
        <Text style={styles.title}> {item?.title} </Text>
        <View style={styles.metricContainer}>
          <Text style={styles.text}> u/{item.author} </Text>
          <View style={styles.metricContainer}>
            <FontAwesomeIcon icon={faCaretSquareUp} />
            <Text style={styles.text}> {item.score} </Text>
          </View>

          <View style={styles.metricContainer}>
            <FontAwesomeIcon icon={faMessage} />
            <Text style={styles.text}> {item.num_comments} </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  feedContainer: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 5,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    zIndex: -999,
  },
  imgContainer: {
    width: 100,
    height: 100,
    // borderWidth: 1,
  },
  subContainer: {
    // borderWidth: 1,
    color: '#000',
    flexShrink: 1,
    padding: 5,
    width: '100%',
  },
  metricContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5,
  },
  text: {
    color: '#000',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    // marginVertical: 5,
    color: '#000',
  },
});

export default Feed;
