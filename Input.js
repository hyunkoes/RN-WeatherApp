import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Button, Alert} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            images:
                [
                    "weather-sunny",
                    "weather-windy",
                    "weather-pouring",
                    "weather-snowy",
                    "weather-rainy",
                    "weather-hurricane",
                    "weather-lightning",
                    "weather-night",
                ],
            selectedImage: "weather-sunny",
        };
    }

    componentDidMount() {
        let index = 0;
        setInterval(() => {
            this.setState({
                selectedImage: this.state.images[(++index) % this.state.images.length],
            })
        }, 1000);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.weatherImage}>
                    <MaterialCommunityIcons name={this.state.selectedImage} size={250} color="black"/>
                </View>
                <View style={styles.searchContainer}>
                    <TextInput
                        value={this.state.text}
                        style={styles.Search}
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>
                <View style={styles.boxContainer}>
                    <Button
                        style={styles.Box}
                        title="검색"
                        onPress={() => this.goSearch()}
                    />
                </View>
                <View style={styles.copyright}>
                    <Text>
                        Copyright(C) 2021. 실전코딩 11조. All right reserved.
                    </Text>
                    <Text>
                        고도현, 신희승, 최현석, 이동헌
                    </Text>
                </View>
            </View>
        );
    }

    goSearch() {
        this.props.navigation.navigate('DETAIL', {text: this.state.text});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: 'white',
    },
    weatherImage: {
        alignItems: 'center',
    },
    Search: {
        display: 'flex',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
    },
    searchContainer: {
        paddingTop: 100,
        paddingRight: 50,
        paddingLeft: 50,
    },
    Box: {
        display: 'flex',
        backgroundColor: 'white',
        borderWidth: 5,
        borderRadius: 5,
        alignItems: "center"
    },
    boxContainer: {
        paddingTop: 10,
        paddingRight: 50,
        paddingLeft: 50,
    },
    copyright: {
        paddingTop: 50,
        paddingLeft: 20,
    }
});
