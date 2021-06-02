import React, { Component } from 'react';
import {FlatList,SafeAreaView, StatusBar, ScrollView, Button,View, Text, StyleSheet } from 'react-native';
import moment from 'moment';
import Show from './show';



export default class DetailScreen extends Component {
    constructor(props){
        super(props);
        const moment = require('moment');

        this.state = {
            weatherData : [], // -6 ~ + 9 data set
        }
    }

    componentMount(){
        return fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ this.props.route.params.text+"&appid=e5ea91bc97a4a071bfb4d4d27fe05ae1")
        .then( (response) => response.json() )
        .then( (responseJson) => {
        console.log(responseJson)
            this.setState({
                  weatherData : [].concat(responseJson.list[0],responseJson.list[1],responseJson.list[2],responseJson.list[3],responseJson.list[4],responseJson.list[5]),
                test : true, // 호출이 되면 true로
            });
            console.log(this.state); // 테스트용 출력
        })
        .catch((error) => {
            console.log(error)
        });
    }


    Weather({item}){
        return(
            <View style = {styles.weatherbox}>
                <Text style={styles.text}>
                {moment(item.dt_txt).format("HHmm")}
                {"\n"}
                {(item.main.temp - 273).toFixed(1)} 'C
                {"\n"}
                {(item.main.humidity)} %
                </Text>
            </View>
        );
    }
    render(){
        if(!this.state.test) this.componentMount();
        if(!this.state.test) { // 도시 검색 실패
               return(
                <Text>!ERROR</Text>
               );
        }
        else{ // 도시 검색 성공
                return(

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
                            {this.state.weatherData.map( (item,index) => // DATA 에 들어있는 컴포넌트 반복 실행
                                <this.Weather key={index} item = {item}/> // Call Weather(item)
                            )}
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
    borderWidth : 1,
    borderRadius : 3,
    lineHeight: 30,

  },
  Search:{
    backgroundColor : 'black',
    alignItems : 'left',
    justifyContent : 'center'

  },
});
