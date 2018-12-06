// Import libraries for making a Component
import React from 'react';
import { StyleSheet,Text,View } from 'react-native';

// Make a Component
const Header = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
} ;


const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width:0, height: 30 },
    shadowOpacity: 0.2,
    elevation:2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
  },
});
// Make the Component available to other parts of the App
export default Header;
