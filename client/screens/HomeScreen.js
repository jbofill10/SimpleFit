import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import "whatwg-fetch";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.simpleFit}>SimpleFit</Text>
      </View>
      <View style={styles.caloriesContainer}>
        <Text style={styles.caloriesConsumed}>Calories Consumed:</Text>
        <Text style={styles.calorieCount}>250</Text>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '12%',
    backgroundColor: "#2B1C40",
    alignItems: "center"
  },
  background: {
    width:'100%',
    height:'100%',
    backgroundColor: '#3E2B57' 
  },
  simpleFit:{
    color: 'white',
    fontSize:30,
    top:"25%",
    position:'relative'
  },
  caloriesContainer:{
    alignItems:'center',
    position: 'relative'
  },
  caloriesConsumed:{
    color: 'white',
    fontSize: 20,
    top: 200
  },
  calorieCount:{
    color: 'white',
    fontSize: 25,
    top: 210
  }
});
