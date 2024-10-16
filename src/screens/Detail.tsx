import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/AppNavigator';
import {CoffeeItem} from '../models/coffeeItem';

// Define the route prop for Detail
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

interface DetailProps {
  route: DetailScreenRouteProp;
}

const Detail = ({route}: DetailProps) => {
  const {item} = route.params;

  return (
    <View>
      <Text style={style.black}>{item.title}</Text>
      <Text style={style.black}>{item.desc}</Text>
      <Text style={style.black}>{item.price}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  black: {color: 'black'},
});

export default Detail;
