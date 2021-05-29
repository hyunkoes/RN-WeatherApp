import { setStatusBarTranslucent, StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, Image, Text,TextInput, Button, StyleSheet, View, Alert } from 'react-native';
import Input from './Input';

export default class App extends React.Component {
  render() {
    return (
    // 검색한 도시를 API 통해서 정보를 뽑아오기  (textbox 클릭 이벤트)
                    // 날짜별 시간별 기온 습도
    // 이미지들 , css
      <SafeAreaView style={styles.fullscreen}>
              <View style={styles.container}>
                 <Input style={{ width: 1, borderColor: 'gray', borderWidth: 1}}/>
                  <Text> 도시 props 는 Input.state.text 입니다
                  </Text>

                  <StatusBar style="auto"/>
              </View>
                  <Text> 여백
                  </Text>
              <View style={styles.container}>
                  <Text> 날씨 결과를 나타낼 구간입니다.
                  </Text>
                  <StatusBar style="auto"/>

              </View>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
  },
  Search:{

  },
  Result:{

  },
  container: {
    flex: 1,
    margin : 30,
    backgroundColor: '#fff',
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
