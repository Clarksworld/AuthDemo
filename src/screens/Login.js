import React from "react";
import { SafeAreaView, View, Text, TextInput, useState} from "react-native";
import CustomButton from "../components/CustomButton";
import Icon from 'react-native-vector-icons/Feather'
import Avater from "../components/Avater";
import NetworkDemo from "./NetworkDemo";
import PropsDemo from "./PropsDemo";
import SignuUp from './SignUp'


Icon.loadFont();


export default Login = ({navigation}) => {

    const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

    return(

        <View>

        <SafeAreaView>

        <View style={{flexDirection: 'row', justifyContent:'space-between',
         marginHorizontal: 20, marginTop: 20}}>

        <Icon name="arrow-left"
        size={30}
        color='black'
        >

        </Icon>

        <View  style={{flexDirection: 'row', marginVertical: 10, justifyContent:'space-evenly'}}>

        <View style={{borderColor: 'blue', height: 3, width: 30, backgroundColor: 'blue'}}/>
        <View style={{borderColor: 'blue', height: 3, width: 30, backgroundColor: '#8185AC', marginStart: 10}}/>
        <View style={{borderColor: 'blue', height: 3, width: 30, backgroundColor: '#8185AC', marginStart: 10}}/>

        </View>

        </View>


        <View style={{marginTop: 100, marginStart: 20}}>
        <Text style={{fontSize: 20, color: '#2330A3', fontWeight: '800'}}>
        Login Your Account
        </Text>

        <Text style={{marginTop: 10, color: '#2330A3'}}>
        Create your account by entering your email
        </Text>
        
        </View>

        <View style={{borderWidth: 1, marginHorizontal: 20, height: 50, borderRadius: 10, 
        marginTop: 50, borderColor: '#8185AC'}}>

        <TextInput
         placeholder="Email Address" 
         value={username}
        onChangeText={setUsername}

        style={{alignSelf: 'flex-start', 
        marginVertical: 15, marginStart: 10}}>
             
        </TextInput>

        </View>


        <View style={{borderWidth: 1, marginHorizontal: 20, height: 50, borderRadius: 10, 
        marginTop: 50, borderColor: '#8185AC'}}>

        <TextInput 
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
         style={{alignSelf: 'flex-start', 
        marginVertical: 15, marginStart: 10}}>
             
        </TextInput>

        </View>
        

        <View style={{marginTop: 100}}>

        <CustomButton 
        title={'Login'}
        screenName="SignUp"
        name={'headphones'}
        size= {20}
        color = 'green'
         />

        </View>

        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 10}}>
            <Text style={{fontSize: 16, color: '#2330A3'}}>
            Have an account?

            </Text>

            <Text style={{fontSize: 16, color: '#2330A3', fontWeight: '700'}}>
            Login
            </Text>
        </View>


        </SafeAreaView>



        </View>
    )
}