/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './src/home-stack/HomeStack';



const Stack = createNativeStackNavigator();


const App = () => {
  return(

    <NavigationContainer>
    {/* <Stack.Navigator>
      <Stack.Screen name="Demo Props" component={PropsDemo} />
    </Stack.Navigator> */}


    <HomeStack/>
  </NavigationContainer>

    )
}

export default App;
