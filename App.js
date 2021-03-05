/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import feed from './assests/data/feed';
import Post from './src/components/Post';
import HomePage from './src/screen/Home';
import PostList from './src/screen/PostList';
import SearchList from './src/screen/SearchList';

// const item = feed[0]

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomePage /> */}
        {/* <Post post={item}/> */}
        {/* <PostList /> */}
        <SearchList />
      </SafeAreaView>
    </>
  );
};

export default App;
