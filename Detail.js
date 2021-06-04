import React, { Component } from 'react';
import {FlatList,SafeAreaView, StatusBar, ScrollView, Image,View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

import humidity from './weatherIcon/humidity.jpg';
import temp_1 from './weatherIcon/temp_10.jpg';
import temp_2 from './weatherIcon/temp_20.jpg';

import Clouds from './weatherIcon/Clouds.png';
import Clear from './weatherIcon/Clear.png';
import Rain from './weatherIcon/Rain.png';
import Snow from './weatherIcon/Snow.png';
import Fog from './weatherIcon/Fog.png';
import ThunderStorm from './weatherIcon/ThunderStorm.png';
import Strong from './weatherIcon/wind_speed_07.png';
import Medium from './weatherIcon/wind_speed_03.png';
import Weak from './weatherIcon/wind_speed_02.png';



export default class DetailScreen extends Component {
    constructor(props){
        super(props);
        const moment = require('moment');

        this.state = {
            weatherData : [], // Test
            test : false,
            load : false,

        }
    }

    componentMount(){
        this.setState({load:true})
         return fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ this.props.route.params.text+"&appid=e393afccd2e728fd351d0f4666c3c411")
            .then( (response) => response.json() )
            .then( (responseJson) => {
                this.setState({
                    weatherData : [].concat(responseJson.list[0],responseJson.list[1],responseJson.list[2],responseJson.list[3],responseJson.list[4],responseJson.list[5]),
                    test : true, // 호출이 되면 true로
                });
            })
            .catch((error) => {
                console.log(error)
            });
    }

    ErrorView(){
        return(
            <View>
                <Text style={{fontSize:30}}>City not found</Text>
            </View>
        );
    }

    Weather({item}){   // 날씨별 이미지 , 기온 ( 최고, 최저 ) , 습도 까지만 일단 출력
        return(
            <View>
                <Text>{moment(item.dt_txt).format("HH")}시 </Text>
                <View style = {styles.weatherbox}>

                    <View style = {styles.iconbox}>
                        {(item.weather[0].main == "Clouds" ?
                            <Image style= {{height:100,width:100}}  resizeMode = "contain"  source={require('./weatherIcon/Clouds.png')} />
                            : item.weather[0].main == "Snow" ?
                                <Image style= {{height:100,width:100}}   resizeMode = "contain" source={require('./weatherIcon/Snow.png')}/>
                                : item.weather[0].main == "Clear" ?
                                    <Image style= {{height:100,width:100}}  resizeMode = "contain"  source={require('./weatherIcon/Clear.png')} />
                                    : item.weather[0].main == "Rain" ?
                                        <Image style= {{height:100,width:100}}  resizeMode = "contain"  source={require('./weatherIcon/Rain.png')} />
                                        : item.weather[0].main == "Drizzle" ?
                                            <Image style= {{height:100,width:100}}  resizeMode = "contain"  source={require('./weatherIcon/Rain.png')} />
                                            : item.weather[0].main == "ThunderStorm" ?
                                               <Image style= {{height:100,width:100}}  resizeMode = "contain"  source={require('./weatherIcon/ThunderStorm.png')} />
                                               : <Image style= {{height:100,width:100}}  resizeMode = "contain"  source={require('./weatherIcon/Fog.png')} />
                                )}
                        <Text>{item.weather[0].main}</Text>
                    </View>
                    <View style = {styles.iconbox}>
                        {(item.main.temp - 273.15) > 20 ?
                            <Image  style={{height:100,width:50}}  resizeMode = "contain"
                                    source={temp_2}/> :
                            <Image  style={{height:100,width:50}}  resizeMode = "contain"
                                    source={temp_1}/>}
                        <Text>{(item.main.temp - 273.15).toFixed(1) + "'C"}</Text>
                    </View>
                    <View style = {styles.iconbox}>
                        <Image style= {{height:100,width:70}}  resizeMode = "contain"
                               source={humidity}/>
                        <Text>{(item.main.humidity)+"%"}</Text>
                    </View>
                    <View style = {styles.iconbox}>
                        {(item.wind.speed > 7 ?
                                <Image style= {{height:100,width:100}} resizeMode = "contain" source={require('./weatherIcon/wind_speed_07.png')}/>
                                : item.wind.speed > 4 ?
                                    <Image style= {{height:100,width:100}} resizeMode = "contain" source={require('./weatherIcon/wind_speed_03.png')} />
                                    : <Image style= {{height:100,width:100}} resizeMode = "contain" source={require('./weatherIcon/wind_speed_02.png')} />
                        )}
                        <Text>{(item.wind.speed) + "m/s"}</Text>
                    </View>
                </View>
            </View>
        );
    }
    render(){
        console.log(this.state.test + ' ' + this.state.load)
        if(!this.state.load) {
            this.componentMount();
            console.log('api 함수 호출 후    '+this.state.test + ' ' + this.state.load)
            }
        if(!this.state.test && this.state.load) {
            console.log('ErrorView 인 상황   '+this.state.test + ' ' + this.state.load)
            return (<this.ErrorView/>);}
        else{ // 도시 검색 성공
            return(
                <SafeAreaView style = {styles.fullscreen}>
                    <View>
                        <Text style={{fontSize:30 ,margin : 10}}>How is the Weather today</Text>
                        <Text style={{margin : 10}}>검색한 도시</Text>
                        <Text style={{fontSize:30, backgroundColor: '#aaaaaa', borderRadius: 5, padding:5, margin:5}}>
                            {this.props.route.params.text}
                        </Text>
                        <StatusBar style="auto"/>
                    </View>
                    <ScrollView style = {styles.Container}>
                        {this.state.weatherData.map( (item,index) =>// DATA 에 들어있는 컴포넌트 반복 실행
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

    weatherboxcol:{
        flexDirection : 'column',
        flex : 1,
        justifyContent : 'space-between',
        margin : 100,
        alignItems:'center'

    },
    Container:{
        margin : 10,
        padding : 10,
        borderRadius : 15,
        backgroundColor : '#c4daf4'
    },
    weatherbox: {
        flexDirection : 'row',
        margin : 10,
        height : 150,
        padding : 30,
        borderWidth : 1,
        justifyContent : 'space-between',
        backgroundColor : 'white',
        borderRadius : 10,
        lineHeight: 30,

    },
    iconbox: {
        width : 50,
        height : 50,
        alignItems:'center',
    },
    Search:{
        backgroundColor : 'black',
        justifyContent : 'center'

    },
});
