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
            <View style = {styles.back}>

                <View style = {styles.Container}>

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
            </View>
        </View>
        );
    }
    goSearch(){
        this.props.navigation.navigate('DETAIL', {text:this.state.text});
    }
}


const styles = StyleSheet.create({
  Container:{
    margin : 30,
    height : 700,
    padding : 10,
    borderRadius : 15,
    backgroundColor : 'white'
  },
  back:{
    flex : 1,
    backgroundColor :'gray'
  },
  Search:{
//    display:'flex',
    margin:30,
    padding:10,
    backgroundColor:'white',
    borderWidth : 4,
    borderRadius: 10,
  },
  Box:{
    fontSize:50,
    borderRadius:100,
    margin:50,
    padding:0
  }
});
