import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

export default class App extends React.Component {
  render() {
    // return (
    //   <View style={styles.container}>
    //     <Header />;
    //   </View>
    // );
    return (
      <View style={{flex: 1}}>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
