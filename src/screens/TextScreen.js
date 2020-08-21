import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');
  return (
    <View>
      <Text style={styles.text}>Enter your password below!</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
        secureTextEntry={true}
      />
      {password.length > 4 ? <Text style={styles.text}>Your password is: {password}</Text> : <Text style={styles.error}>Password needs to be longer than 5 characters!!!</Text> }
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  },
  text: {
    margin: 15,
    fontSize: 20,
    color: 'green'
  },
  error: {
    margin: 15,
    fontSize: 20,
    color: 'red'
  }
});

export default TextScreen;
