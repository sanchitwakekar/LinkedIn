import React from 'react';
import {
  StatusBar,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
export class Headernavigator extends React.Component{
    render(){
        return(
            <TouchableOpacity style={{padding:10}} onPress={this.props.navigation.openDrawer}><Image style={{
                marginLeft: 8,
                height: 25,
                width: 25,        
                padding:10,   
              }}
                source={require('../Assets/ham.png')} /></TouchableOpacity>
        );
    }
}