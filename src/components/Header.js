import React, {useEffect, useState} from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';
import FeedModal from './FeedModal';
import SearchBar from './SearchBar';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCaretSquareDown} from '@fortawesome/free-regular-svg-icons';

const Header = ({triggerFeedFetch, handleSearch, searchValue}) => {
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
      <Text style={styles.title}>r/programming News Feed</Text>
      <SearchBar handleSearch={handleSearch} searchValue={searchValue} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontWeight: 'bold',
    marginRight: 5,
  },
  select: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    position: 'relative',
  },
});

export default Header;
