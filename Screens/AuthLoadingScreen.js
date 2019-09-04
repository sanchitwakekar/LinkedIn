import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import { connect } from 'react-redux';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
  componentDidMount() {
    if (this.props.Authentication.isLoggedIn === '1') {
      this.props.navigation.navigate('App');
    }
  }

  _bootstrapAsync = async () => {
    if (this.props.Authentication.isLoggedIn === '1') {
      this.props.navigation.navigate('App');
    }
    else {
      this.props.navigation.navigate('Auth');
    }
  };

  render() {
    return (
      <View>

        <StatusBar barStyle="default" />
      </View>
    );
  }
}

function mapStatetoProps(state) {
  console.log(state);
  return {
    Authentication: state.Authentication,
  }
}
export default connect(mapStatetoProps)(AuthLoadingScreen);
