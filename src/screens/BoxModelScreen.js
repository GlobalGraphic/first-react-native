import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxModelScreen = () => {
  return (
      <View>
        <Text>Box Model Styling</Text>
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>Box Model Screen</Text>
        </View>

        <Text>FlexBox Styling</Text>
        <View style={styles.flexStyle}>
          <Text style={styles.flexTextOneStyle}>Child #1</Text>
          <Text style={styles.flexTextTwoStyle}>Child #2</Text>
          <Text style={styles.flexTextThreeStyle}>Child #3</Text>
        </View>
          <View style={styles.boxStyle}>
              <Text style={styles.boxOne}></Text>
              <Text style={styles.boxTwo}></Text>
              <Text style={styles.boxThree}></Text>
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
    boxStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    boxOne: {
        backgroundColor: 'red',
        width: 50,
        height: 50
    },
    boxTwo: {
        backgroundColor: 'blue',
        width: 50,
        height: 50,
        marginTop: 50
    },
    boxThree: {
        backgroundColor: 'green',
        width: 50,
        height: 50
    },
  viewStyle: {
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 20
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'red',
    margin: 20
  },
  flexStyle: {
    borderWidth: 2,
    borderColor: 'black',
      height: 200
  },
  flexTextOneStyle: {
    borderWidth: 1,
    borderColor: 'red'
  },
    flexTextTwoStyle: {
        borderWidth: 1,
        borderColor: 'red',
        // contains property of positipn: 'absolute', left:0 , right:0, top:0; bottom:0
            ...StyleSheet.absoluteFillObject
    },
    flexTextThreeStyle: {
        borderWidth: 1,
        borderColor: 'red'
    }
});

export default BoxModelScreen;
