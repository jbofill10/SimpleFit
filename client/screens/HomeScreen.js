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
<<<<<<< HEAD
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/2019-07-09-07-41-26.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
          <DevelopmentModeNotice />

          <Text style={styles.getStartedText}>Fuck Juans get </Text>

          <Text style={styles.getStartedText}>
            MONEY
          </Text>
        </View>

        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>
              If you see this, you did everything correctly!
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          Congrats.
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>
            There is a long road ahead of us.
          </MonoText>
        </View>
=======
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.simpleFit}>SimpleFit</Text>
>>>>>>> master
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
