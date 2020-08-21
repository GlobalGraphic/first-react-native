import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (<View>
    <Text style={styles.text}>Volam sa branko</Text>
    <Button
      onPress={() => navigation.navigate('Components')}
      title="Go To Components Demo" />
    <Button
      title="Go To List Demo"
      onPress={() => navigation.navigate('List')}
    />
    <Button
      title="Go To Image Demo"
      onPress={() => navigation.navigate('Image')}
    />
    <Button
      title="Go To Counter Demo"
      onPress={() => navigation.navigate('Counter')}
    />
    <Button
      title="Go To Colors Demo"
      onPress={() => navigation.navigate('Color')}
    />
    <Button
      title="Go To Square Demo"
      onPress={() => navigation.navigate('Square')}
    />
    <Button
      title="Go To Text Demo"
      onPress={() => navigation.navigate('Text')}
    />
    <Button
      title="Go To Box Model Demo"
      onPress={() => navigation.navigate('Box')}
    />
  </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'red',
    textAlign: 'center'
  }
});

export default HomeScreen;
