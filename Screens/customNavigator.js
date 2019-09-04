//Drawernavigation Imports
import React from 'react';
import {  Image, SafeAreaView } from 'react-native';
import { DrawerItems } from 'react-navigation';

export default class customNavigator extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView>
                <Image
                    style={{ width: 100, height: 100,marginLeft:20 }}
                    source={require('../Assets/boy.png')}                    
                 />

                <DrawerItems {...this.props} />
            </SafeAreaView>
        );
    }
}



