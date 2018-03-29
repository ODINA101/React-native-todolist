import React,{ Component } from 'react';
import { View,Text } from 'react-native';

export default class Full extends React.Component {
    static navigationOptions = {
        headerStyle: {backgroundColor:"#2c3e50"},
        headerTitleStyle: {
            color: 'white',
        },
        headerBackTitleStyle: {
            color: 'white',
        },
        headerTintColor: 'white',
      };
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <View>
            <Text>{this.props.navigation.state.params.name}</Text>
        </View>
        );
    }
}