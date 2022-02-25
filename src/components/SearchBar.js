import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = ({
  searchValue = '',
  handleFocus,
  handleSearch = () => {},
  blurInput,
}) => {
  return (
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
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
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
