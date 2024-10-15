import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartScreen from '../screens/StartScreen';
// import Main from '../screens/TabScreen/Main';
import Detail from '../screens/Detail';
import Order from '../screens/Order';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabs" screenOptions={{headerShown: false}}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Order" component={Order} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
