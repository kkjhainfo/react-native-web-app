import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import App from './MyApp';
import SignInScreen from './login';
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={App} />
      <Stack.Screen name="Login" component={SignInScreen} />
      
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default MyStack;