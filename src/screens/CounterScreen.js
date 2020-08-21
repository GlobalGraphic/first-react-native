import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  // state == { count: number }
  switch (action.type) {
    case 'incremet':
      return {...state, count: state.count + action.payload}
    case 'decremet':
      return {...state, count: state.count - action.payload}
    default:
        return state;
  }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    // const {increase, decrease} = state;

    return (
        <View>
            <Button title="Increase" onPress={() => dispatch({type: 'incremet', payload: 1 })}/>
            <Button title="Decrease" onPress={() => dispatch({type: 'decremet', payload: 1 })}/>
            <Text>Current Count: {state.count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;
