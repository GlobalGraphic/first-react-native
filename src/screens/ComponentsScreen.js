import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

    const name = 'Branko';

    return (
    <View>
        <Text style={styles.textStyle}>Getting started with React Native!</Text>
        <Text style={styles.textStyle1}>My Name is {name}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
        color: 'green',
        textAlign: 'center'
    },

    textStyle1: {
        fontSize: 20,
        color: 'red',
        textAlign: 'center',
        marginTop: 25,
    }
});

export default ComponentsScreen;
