import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text} from 'react-native';
import Main from '../screens/TabScreen/Main';
import Love from '../screens/TabScreen/Love';
import Basket from '../screens/TabScreen/Basket';
import Notification from '../screens/TabScreen/Notification';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}: any) => ({
        tabBarIcon: ({focused}: any) => {
          let iconSource;

          if (route.name === 'Main') {
            iconSource = focused
              ? require('../assets/icons/main-active.png')
              : require('../assets/icons/main.png');
          } else if (route.name === 'Love') {
            iconSource = focused
              ? require('../assets/icons/love-active.png')
              : require('../assets/icons/love.png');
          } else if (route.name === 'Basket') {
            iconSource = focused
              ? require('../assets/icons/basket-active.png')
              : require('../assets/icons/basket.png');
          } else if (route.name === 'Notification') {
            iconSource = focused
              ? require('../assets/icons/notification-active.png')
              : require('../assets/icons/notification.png');
          }

          return (
            <>
              <Image
                source={iconSource}
                style={{width: 24, height: 24}}
                resizeMode="contain"
              />
              <Text>{route.name}</Text>
            </>
          );
        },
        tabBarLabel: () => null, 
      })}>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Love" component={Love} />
      <Tab.Screen name="Basket" component={Basket} />
      <Tab.Screen name="Notification" component={Notification} />
      
    </Tab.Navigator>
  );
};

export default TabNavigator;
