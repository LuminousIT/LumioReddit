import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const SearchBar = ({
  searchValue = '',
  handleFocus,
  handleSearch = () => {},
  blurInput,
}) => {
  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <TextInput
        value={searchValue}
        placeholder="Search"
        onChangeText={handleSearch}
        style={styles.input}
        onFocus={handleFocus}
        onBlur={blurInput}
      />
    </View>
    // </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderColor: '#c4c4c4',
    color: '#000',
  },
  container: {
    marginVertical: 5,
    position: 'relative',
    // borderWidth: 1,
  },
});

export default SearchBar;
