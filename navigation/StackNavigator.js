import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/Home';
import DocumentScannerComponent from '../components/DocumentScannerComponent';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DocumentScannerComponent" component={DocumentScannerComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;