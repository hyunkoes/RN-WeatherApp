import React, { Component } from 'react';
import { View, Text, } from 'react-native';

export default class DetailScreen extends Component {
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


