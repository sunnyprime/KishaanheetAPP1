/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, Image, View, StyleSheet, ScrollView} from 'react-native';
// import { Image } from 'react-native'


class HomeBox extends Component {
  render() {
    return (
      <View style={styles.container} >
        {/* <View style = {styles.redbox} />
         <View style = {styles.bluebox} />
         <View style = {styles.blackbox} />
         <View style = {styles.greenbox} /> */}
         <Image source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
   style = {{ width: 250, height: 250 }}
   />
   <Text>Farm Rental</Text>
   <Image source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
   style = {{ width: 250, height: 250 }}
   />
   <Text>Agri Input</Text>
   <Image source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
   style = {{ width: 250, height: 250 }}
   />
      </View>
    );
  }
}
export default HomeBox;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'gray',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  redbox: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
 },
 bluebox: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
 },
 blackbox: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
 },
 greenbox: {
   width:100,
   height:100,
   backgroundColor:'green',
 },

});
