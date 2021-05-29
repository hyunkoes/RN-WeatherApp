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
            <View>
                <TextInput
                    value = {this.state.text}
                    style={styles.Search}
                    onChangeText={(text) => this.setState({text})}
                />
                <Button
                    style = {styles.Box}
                    title="검색"
                    onPress = {()=> this.goSearch()}
                />
            </View>
        );
    }
    goSearch(){
        this.props.navigation.navigate('DETAIL', {text:this.state.text});
    }
}


const styles = StyleSheet.create({
  Search:{
//    display:'flex',
    margin:0,
    padding:0,
    backgroundColor:'white',
    borderWidth : 4,
    borderRadius: 10,
    align : 'center'
  },
  Box:{
    fontSize:100,
    borderRadius:100,
    margin:0,
    padding:0
  }
});
