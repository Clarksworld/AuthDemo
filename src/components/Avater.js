import React from "react";
import {View, Text, Image, Button} from 'react-native'
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default Avatar = ({ screenName, title }) => {

    const navigation = useNavigation();

    return (
        <Button
       title={`Go to ${title}`}
      onPress={() => navigation.navigate(screenName)}
    />
    );
  }