import React, { Component } from 'react';
import {SafeAreaView, StatusBar, ScrollView, Button,View, Text, StyleSheet } from 'react-native';
import moment from 'moment'
export default class DetailScreen extends Component {
    constructor(props){
        super(props);
        const moment = require('moment');

        this.state = {
            weather_P6h : [], // 6시간 전
            weather_P3h : [], // 3시간 전
            weather_N0h : [], // 현재
            weather_F3h : [], // 3시간 후
            weather_F6h : [], // 6시간 후
            weather_F9h : [], // 9시간 후
        }
    }

    componentMount(){
        return fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ this.props.route.params.text+"&appid=e5ea91bc97a4a071bfb4d4d27fe05ae1")
        .then( (response) => response.json() )
        .then( (responseJson) => {
        console.log(responseJson)
            this.setState({
                  weather_P6h : (responseJson.list[0]),
                  weather_P3h : (responseJson.list[1]),
                  weather_N0h : (responseJson.list[2]),
                  weather_F3h : (responseJson.list[3]),
                  weather_F6h : (responseJson.list[4]),
                  weather_F9h : (responseJson.list[5]),
                test : true, // 호출이 되면 true로
            });
            console.log(this.state); // 테스트용 출력
        })
        .catch((error) => {
            console.log(error)
        });
    }

  render() {
            if(!this.state.test){
                this.componentMount();
            }
            if(!this.state.test){ // 도시 호출 실패
                return (
                    <View>
                        <Text style={{fontSize:30}}>How is the Weather today</Text>
                        <Text>검색한 도시</Text>
                        <Text style={{fontSize:30, backgroundColor: '#aaaaaa', borderRadius: 5, padding:5, margin:5}}>
                        {this.props.route.params.text}
                        </Text>
                        <Text> ! Error 해당 도시 없음</Text>
                    </View>
                );

            }
            else{ // 도시 호출 성공
                return (
                                <SafeAreaView style = {styles.fullscreen}>
                                      <View>
                                        <Text style={{fontSize:30}}>How is the Weather today</Text>
                                        <Text>검색한 도시</Text>
                                        <Text style={{fontSize:30, backgroundColor: '#aaaaaa', borderRadius: 5, padding:5, margin:5}}>
                                        {this.props.route.params.text}
                                        </Text>
                                        <StatusBar style="auto"/>
                                      </View>
                                    <ScrollView>
                                      <View style = {styles.weatherbox}>
                                           <Text>
                                           {moment(this.state.weather_P6h.dt_txt).format("HHmm")}
                                           {"\n"}
                                           {(this.state.weather_P6h.main.temp - 273).toFixed(1)}
                                           {"\n"}
                                           {(this.state.weather_P6h.main.humidity) }%
                                           </Text>

                                           <StatusBar style="auto"/>
                                      </View>
                                      <View style = {styles.weatherbox}>
                                           <Text>
                                           {moment(this.state.weather_P3h.dt_txt).format("HHmm")}
                                           {"\n"}
                                           {(this.state.weather_P3h.main.temp - 273).toFixed(1)}
                                           {"\n"}
                                           {(this.state.weather_P3h.main.humidity) }%
                                           </Text>
                                                             <StatusBar style="auto"/>

                                      </View>
                                      <View style = {styles.weatherbox}>
                                           <Text>
                                           {moment(this.state.weather_N0h.dt_txt).format("HHmm")}
                                           {"\n"}
                                           {(this.state.weather_N0h.main.temp - 273).toFixed(1)}
                                           {"\n"}
                                           {(this.state.weather_N0h.main.humidity) }%
                                           </Text>
                                                             <StatusBar style="auto"/>

                                      </View>
                                      <View style = {styles.weatherbox}>
                                           <Text>
                                           {moment(this.state.weather_F3h.dt_txt).format("HHmm")}
                                           {"\n"}
                                           {(this.state.weather_F3h.main.temp - 273).toFixed(1)}
                                           {"\n"}
                                           {(this.state.weather_F6h.main.humidity) }%
                                           </Text>
                                                             <StatusBar style="auto"/>

                                      </View>
                                      <View style = {styles.weatherbox}>
                                           <Text>
                                           {moment(this.state.weather_F6h.dt_txt).format("HHmm")}
                                           {"\n"}
                                           {(this.state.weather_F6h.main.temp - 273).toFixed(1)}
                                           {"\n"}
                                           {(this.state.weather_F6h.main.humidity) }%
                                           </Text>
                                                             <StatusBar style="auto"/>

                                      </View>
                                      <View style = {styles.weatherbox}>
                                           <Text>
                                           {moment(this.state.weather_F9h.dt_txt).format("HHmm")}
                                           {"\n"}
                                           {(this.state.weather_F9h.main.temp - 273).toFixed(1)}
                                           {"\n"}
                                           {(this.state.weather_F9h.main.humidity) }%
                                           </Text>
                                                             <StatusBar style="auto"/>

                                      </View>
                                      </ScrollView>
                                </SafeAreaView>


                            );

            }


    }
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
  },
  weatherbox: {
    width:100,
    height:100,
    flex:1,
    padding : 5,
    lineHeight: 30,

  },
  Search:{
    backgroundColor : 'black',
    alignItems : 'left',
    justifyContent : 'center'

  },
});
