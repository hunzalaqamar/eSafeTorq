import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import {RootStackParamList} from './src/constants/types'; // Import the stack param types
import ConnectionScreen from './src/screens/ConnectionScreen';
import SavedFilesScreen from './src/screens/SavedFilesScreen';

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
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Connect"
          component={ConnectionScreen}
          options={{title: 'Connecting Device'}}
        />
        <Stack.Screen
          name="SavedFiles"
          component={SavedFilesScreen}
          options={{title: 'Export Files'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
