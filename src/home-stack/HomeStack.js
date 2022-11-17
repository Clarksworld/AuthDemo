import { createStackNavigator } from '@react-navigation/stack';
import FlatListDemo from '../screens/FlatListDemo';
import Login from '../screens/Login';
import NetworkDemo from '../screens/NetworkDemo';
import SignuUp from '../screens/SignUp';
import KycScreen from '../screens/KycScreen';
import FlagDemo from '../screens/FlagDemo';

const Stack = createStackNavigator();

export default HomeStack = () =>{
  return (
    <Stack.Navigator>
    <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name="Kyc" component={KycScreen} />
      <Stack.Screen name="FlagDemo" component={FlagDemo} />
      <Stack.Screen name="SignUp" component={SignuUp} />
      <Stack.Screen name="Network" component={NetworkDemo} />
      <Stack.Screen name="FlatList Demo" component={FlatListDemo} />
    </Stack.Navigator>
  );
}

