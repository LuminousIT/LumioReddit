import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Linking,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getNewsAction, reqDispatch} from '../store/actions';
import Feed from './Feed';
import Header from './Header';
import {store} from '../store';
import {RESET} from '../store/types';
import {getCache, storeCache} from '../utils.js';
import CacheData from './CacheData';

const NewsFeed = () => {
  const dispatch = useDispatch();
  const news = useSelector(state => state.newslist.news);

  const [loader, setLoader] = useState(false);
  const [cacheData, setCacheData] = useState([]);
  const [cacheVisible, setCacheVisible] = useState(false);

  const [query, setQuery] = useState('');
  const [newsType, setNewsType] = useState('');

  const [searchValue, setSearchValue] = useState('');
  const [feedList, setFeedList] = useState([]);

  const [debounceTimer, setDebounceTimer] = useState('');

  useEffect(() => {
    async function call() {
      setLoader(true);
      await dispatch(getNewsAction(newsType, query));
      setLoader(false);
    }
    call();
    getCache('@cache');
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

  useEffect(() => {
    if (debounceTimer) clearTimeout(debounceTimer);
    const timer = setTimeout(async () => {
      await storeCache(searchValue);
    }, 500);
    setDebounceTimer(timer);
  }, [searchValue]);

  const handleOnItemSelect = url => {
    Linking.canOpenURL(url).then(response => {
      if (response) Linking.openURL(url);
    });
  };

  const renderFeed = feed => {
    const item = feed.item.data;
    return <Feed item={item} handleOnItemSelect={handleOnItemSelect} />;
  };

  const hideCacheComponent = () => {
    setCacheVisible(false);
    setCacheData([]);
  };

  const handleSearchFocus = e => {
    getCache('@cache').then(response =>
      response !== -1 ? setCacheData(response) : null,
    );
    setCacheVisible(true);
  };

  return (
    <>
      <FlatList
        ListHeaderComponent={
          <Header
            triggerFeedFetch={triggerFeedFetch}
            handleSearch={handleSearch}
            searchValue={searchValue}
            hideCacheComponent={hideCacheComponent}
            handleSearchFocus={handleSearchFocus}
            loader={loader}
          />
        }
        ListHeaderComponentStyle={styles.listHeaderComponent}
        data={feedList}
        renderItem={renderFeed}
        keyExtractor={item => item.data.id}
        onEndReached={info => {
          setQuery(news[news.length - 1].data.id);
        }}
        keyboardShouldPersistTaps="handled"
      />
      {cacheVisible && (
        <CacheData cacheData={cacheData} handleCacheSelect={handleSearch} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  listHeaderComponent: {
    padding: 10,
  },
});

export default NewsFeed;
