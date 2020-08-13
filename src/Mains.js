/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View,StyleSheet} from 'react-native';
import Home from './Home/home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FormRental from './Pages/FormRental';
import AgriInput from './Pages/AgriInput';
import Profile from './Pages/Profile';
import SocialMedia from './Pages/SocialMedia';
import Contact from './Pages/Contact';

const Stack = createStackNavigator();
const Mains = () => {
  return (
    <View style={styles.container}>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Form Rental" component={FormRental} />
          <Stack.Screen name="AgriInput" component={AgriInput} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="SocialMedia" component={SocialMedia} />
          <Stack.Screen name="Contact" component={Contact} />
          {/* <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'My home',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              justifyContent: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerRight: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="#00cc00"
                />
              ),
            }}
          /> */}
          {/* <Stack.Screen
            name="Details"
            component={DetailsScreen}
            initialParams={{itemId: 100}}
            options={({route}) => ({title: route.params.name})}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
export default Mains;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'blue',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
