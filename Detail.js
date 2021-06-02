import React, { Component } from 'react';
import { Button,View, Text, } from 'react-native';

export default class DetailScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            main : null,
            dt : null,
            temp_current : null,
            temp_feel : null,
            temp_min : null,
            temp_max : null,
            clouds : null,
            hum : null,
            test:false,
        }
    }

    componentMount(){
        return fetch("https://api.openweathermap.org/data/2.5/find?q="+ this.props.route.params.text+"&appid=e5ea91bc97a4a071bfb4d4d27fe05ae1")
        .then( (response) => response.json() )
        .then( (responseJson) => {
        console.log(responseJson)
            this.setState({
//                main : responseJson.weather[0].main,
                dt : responseJson.list[0].dt ,
//                temp_current : responseJson.main.temp,
//                temp_feel : responseJson.main.feels_like,
//                temp_min: responseJson.main.temp_min,
//                temp_max: responseJson.main.temp_max,
//                clouds : responseJson.clouds.all,
//                hum : responseJson.main.humidity,
                test : true,
            });
            console.log(this.state);
        })
        .catch((error) => {
            console.log(error)
        });
    }

  render() {
            if(!this.state.test){
                        this.componentMount();
            }
            return (
                      <View>
                        <Text style={{fontSize:30}}>How is the Weather today</Text>
                        <Text>검색한 도시</Text>
                        <Text style={{fontSize:30, backgroundColor: '#aaaaaa', borderRadius: 5, padding:5, margin:5}}>
                        {this.props.route.params.text}
                        </Text>
                      </View>
                    );

    }


}


