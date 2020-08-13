/* eslint-disable prettier/prettier */
import React from 'react';
// import {Text, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import SocialMedia from '../Pages/SocialMedia';
// import AgriInput from '../Pages/AgriInput';
import Contact from '../Pages/Contact';
// import Profile from '../Pages/Profile';
// import FormRental from '../Pages/FormRental';
import {Text, Button, Image, View, StyleSheet, ScrollView} from 'react-native';
import Carosoul from '../Component/Carosoul';
import HomeBox from '../Component/HomeBox';

// const Stack = createStackNavigator();

const Home = ({navigation}) => {
  // console.log('home');
  // console.log(navigation);

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
        <Carosoul />
        <HomeBox />
        {/* <Text>Home Page</Text> */}
        {/* <Button
          title="Go to Contact"
          onPress={() => navigation.navigate('Contact')}
        /> */}
        </ScrollView>
      </View>
    </>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'grey',
    margin: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});
