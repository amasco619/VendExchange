/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// Dependecies required to INSTALL NAVIGATION BAR and switching of screens
// yarn add @react-navigation/native @react-navigation/bottom-tabs @react-navigation/stack
// yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
// import 'react-native-gesture-handler' paste in App.js;
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import feed from './assests/data/feed';
import Post from './src/components/Post';
import GuestCount from './src/screen/GuestCount';
import HomePage from './src/screen/Home';
import PostList from './src/screen/PostList';
import SearchList from './src/screen/SearchList';
import Router from './src/navigation/router';

// const item = feed[0]

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
      {/* <SafeAreaView> */}
        {/* <HomePage /> */}
        {/* <Post post={item}/> */}
        {/* <PostList /> */}
        {/* <SearchList /> */}
        {/* <GuestCount /> */}
      {/* </SafeAreaView> */}
    </>
  );
};

export default App;
