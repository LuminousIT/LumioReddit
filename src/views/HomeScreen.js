import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import NewsFeed from '../components/NewsFeed';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <NewsFeed />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingVertical: 10,
    backgroundColor: '#f4f4f4',
  },
});

export default HomeScreen;
