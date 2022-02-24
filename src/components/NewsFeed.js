import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Linking} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getNewsAction, reqDispatch} from '../store/actions';
import Feed from './Feed';
import Header from './Header';
import {store} from '../store';
import {RESET} from '../store/types';

const NewsFeed = () => {
  const dispatch = useDispatch();
  // const news = useSelector(state => state.topnews.top);
  const news = useSelector(state => state.newslist.news);

  const [query, setQuery] = useState('');
  const [newsType, setNewsType] = useState('');

  const [searchValue, setSearchValue] = useState('');
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    dispatch(getNewsAction(newsType, query));
  }, [newsType, query]);

  useEffect(() => {
    if (searchValue === '') return setFeedList(news);
    const result = news.filter(item =>
      item.data.title.toLowerCase().includes(searchValue.toLowerCase()),
    );

    setFeedList(result);
  }, [searchValue, news]);

  const triggerFeedFetch = value => {
    store.dispatch(reqDispatch(RESET, []));
    setNewsType(value);
    setQuery('');
  };

  const handleSearch = value => {
    setSearchValue(value);
  };

  const handleOnItemSelect = url => {
    Linking.canOpenURL(url).then(response => {
      if (response) Linking.openURL(url);
    });
  };

  const renderFeed = feed => {
    const item = feed.item.data;
    return <Feed item={item} handleOnItemSelect={handleOnItemSelect} />;
  };

  return (
    <FlatList
      ListHeaderComponent={
        <Header
          triggerFeedFetch={triggerFeedFetch}
          handleSearch={handleSearch}
          searchValue={searchValue}
        />
      }
      ListHeaderComponentStyle={styles.listHeaderComponent}
      data={feedList}
      renderItem={renderFeed}
      keyExtractor={item => item.data.id}
      onEndReached={info => {
        setQuery(news[news.length - 1].data.id);
      }}
    />
  );
};

const styles = StyleSheet.create({
  listHeaderComponent: {
    padding: 10,
  },
});

export default NewsFeed;
