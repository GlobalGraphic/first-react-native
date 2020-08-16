import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease, value}) => {
  return <View>
    <Text style={{textAlign: 'center', fontSize: 25}}>{color} : {value}</Text>
    <Button onPress={() => onIncrease()} title={`Incerase ${color}`}/>
    <Button onPress={() => onDecrease()} title={`Decrease ${color}`}/>
  </View>
};

const styles = StyleSheet.create({});

export default ColorCounter;
