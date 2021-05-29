import { setStatusBarTranslucent, StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, Image, Text,TextInput, Button, StyleSheet, View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import MainScreen from './Input';
import DetailScreen from './Detail';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
            <Stack.Navigator initialRouteName="MAIN">
              <Stack.Screen name="MAIN" component={MainScreen}
                options={{
                  title: '도시 검색'
              }}/>
              <Stack.Screen name="DETAIL" component={DetailScreen}
                options={{
                  title: '상세 정보'
              }}/>
            </Stack.Navigator>
          </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
  },
  Search:{
    backgroundColor : 'black',
    alignItems : 'left',
    justifyContent : 'center'

  },
  Result:{

  },
  container: {
    flex: 1,
    margin : 30,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:50,
  },
  ButtonContainer:{
    width : 300,
    borderColor: 'black',
    borderWidth:10,
    alignItems:'center',
    backgroundColor:'red',
    margin:5
  }
});
