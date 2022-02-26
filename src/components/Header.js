import React, {useEffect, useState} from 'react';
import {
  View,
  Pressable,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import FeedModal from './FeedModal';
import SearchBar from './SearchBar';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCaretSquareDown} from '@fortawesome/free-regular-svg-icons';

const Header = ({
  triggerFeedFetch,
  handleSearch,
  searchValue,
  hideCacheComponent,
  handleSearchFocus,
  loader,
}) => {
  const [open, setOpen] = useState(false);
  const [activeFeed, setActiveFeed] = useState('Top');

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleSelect = value => {
    setActiveFeed(value);
    handleClose();
  };

  useEffect(() => {
    triggerFeedFetch(activeFeed);
  }, [activeFeed]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lumio r/programming News Feed</Text>
      <SearchBar
        handleSearch={handleSearch}
        searchValue={searchValue}
        handleFocus={handleSearchFocus}
        blurInput={hideCacheComponent}
      />
      <Pressable style={styles.select} onPress={handleOpenModal}>
        <Text style={styles.title}>{activeFeed}</Text>
        <FontAwesomeIcon icon={faCaretSquareDown} />
        <FeedModal
          open={open}
          handleClose={handleClose}
          activeFeed={activeFeed}
          handleSelect={handleSelect}
        />
      </Pressable>
      {loader && <ActivityIndicator color="blue" size="large" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    marginRight: 5,
  },
  select: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    position: 'relative',
    // borderWidth: 1,
  },
});

export default Header;
