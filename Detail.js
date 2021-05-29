import React, { Component } from 'react';
import { Button,View, Text, } from 'react-native';

export default class DetailScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            main : "",
            temp_min : null,
            temp_max : null,
            hum : null,
            test:false,
        }
    }

    componentMount(){
        return fetch("http://api.openweathermap.org/data/2.5/weather?q="+this.props.route.params.text+"&appid=e5ea91bc97a4a071bfb4d4d27fe05ae1")
        .then( (response) => response.json() )
        .then( (responseJson) => {
            this.setState({
                main : responseJson.weather[0].main,
                temp_min: responseJson.main.temp_min,
                temp_max: responseJson.main.temp_max,
                hum : responseJson.main.humidity,
                test : true,
            });
            console.log(this.state);
        })
        .catch((error) => {
            console.log(error)
        });
    }

  render() {
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


