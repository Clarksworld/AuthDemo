import React from "react";
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Icon  from "react-native-vector-icons/Feather";


export default CustomButton = ({ screenName, title, name, size, color }) => {

    // const pop = props.onPress;
    const navigation = useNavigation();

    // headphones


    return( 
        
        <TouchableOpacity style={{height: 50, backgroundColor: '#2C3CCC', marginTop: 40,
        marginHorizontal: 40, borderRadius: 10, justifyContent: 'center', alignContent: 'center'}} 
        onPress={() => navigation.navigate(screenName)}>

        <Text style={{color: 'white', alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>{title}</Text>

        <Icon
        name={name}
        size={size}
        color={color}>

        </Icon>

        </TouchableOpacity>
    )
}