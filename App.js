import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import HomeScreen from './src/views/HomeScreen';
import {Provider} from 'react-redux';
import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
