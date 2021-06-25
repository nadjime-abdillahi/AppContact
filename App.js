import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Login';
import Register from './src/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import firebase from 'firebase'
import Home from './src/Home';

const tab = createMaterialTopTabNavigator()

export default function App() {

  var firebaseConfig = {
    apiKey: "AIzaSyCI-UtIplRWtm4OteOSB_JT7KM6unGXknI",
    authDomain: "appcontact-b22f8.firebaseapp.com",
    projectId: "appcontact-b22f8",
    storageBucket: "appcontact-b22f8.appspot.com",
    messagingSenderId: "1078882037055",
    appId: "1:1078882037055:web:940fc638db4edba5d1f78a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  return (
    <View style={styles.container}>
      <Text style={styles.barstyle}>AppContact</Text>
        <NavigationContainer>
          <tab.Navigator>
            <tab.Screen name="Login" component={Login} options={{title: "Connexion"}}/>
            <tab.Screen name="Register" component={Register} options={{title: "inscription"}}/>
            <tab.Screen name="Home" component={Home} options={{title: "Acceuil"}}/>
          </tab.Navigator>
        </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
  barstyle:{
    backgroundColor: 'red',
    marginTop: 30,
    textAlign: 'center',
    fontSize: 30,
    paddingTop: 30,
    paddingBottom: 30,
  },
});
