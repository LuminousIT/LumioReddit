import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, AppState} from 'react-native';
import CacheData from '../components/CacheData';
import NewsFeed from '../components/NewsFeed';
import {clearCache, getCache} from '../utils.js';

const HomeScreen = () => {
  const [appState, setAppState] = useState(AppState.currentState);

  // Add listener to listen to app state when app is launched
  useEffect(() => {
    //  App state to clear cache when app is in background
    const listener = AppState.addEventListener('change', change => {
      setAppState(change);
      if (appState === 'background') clearCache();
    });

    return () => {
      listener?.remove();
    };
  }, []);

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
