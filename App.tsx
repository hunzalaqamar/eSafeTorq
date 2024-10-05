import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import {RootStackParamList} from './src/constants/types'; // Import the stack param types
import ConnectionScreen from './src/screens/ConnectionScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        {/* Wrap in Screen */}
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{headerShown: false}}
        />
        {/* Wrap in Screen */}
        <Stack.Screen
          name="Connect"
          component={ConnectionScreen}
          options={{title: 'Connecting Device'}}
        />
        {/* Wrap in Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
