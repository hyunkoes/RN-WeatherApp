import React, {Component} from 'react';
import {StyleSheet,View, Text, TextInput, Button,Alert } from 'react-native';

export default class Input extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            text : "",
        };
    }

    render(){
        return(
            <View >
                <TextInput
                value = {this.state.text}
                style={styles.Search}
                onChangeText={(text) => this.setState({text})}
                />
                <Button
                    title="검색"
                    onPress = {()=> alert(this.state.text)}
                />
            </View>
        );
    }

}


const styles = StyleSheet.create({
  Search:{
    padding:0,
    backgroundColor:'white',
    borderWidth : 4,
    borderRadius: 10,
    align : 'center'
  }
});
