import React from 'react';
import {
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import { GET_ACTION_SIGNIN } from '../Actions/actionsignin';
import { connect } from 'react-redux';

class SignInScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }
  componentDidUpdate() {
    if (this.props.Authentication.isLoggedIn === '1') {
      this.props.navigation.navigate('App');
    }
  }

  signAsync = async () => {
    this.props.signin_user(this.state);
  };
  registerAsync = async () => {
    this.props.navigation.navigate('Register');
  };

  render() {
    return (

      <View style={styles.rootstyle}>
        <StatusBar barStyle="light-content" />
        <View>
          <Text style={styles.Labelstyle}>Username</Text>
          <TextInput
            style={styles.styletextinput}
            placeholder="Username"
            placeholderTextColor="#FFF"
            fontWeight='bold'
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
            value={this.state.username}
          />
        </View>
        <View>
          <Text style={styles.Labelstyle}>Password</Text>
          <TextInput
            style={styles.styletextinput}
            placeholder="Password"
            placeholderTextColor="#FFF"
            fontWeight='bold'
            secureTextEntry
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </View>

        <View>
          <TouchableOpacity style={styles.styletouchableopacity} onPress={this.signAsync}>
            <Text style={styles.styletext} >SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.styletouchableopacity} onPress={this.registerAsync}>
            <Text style={styles.styletext}>JOIN NOW</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootstyle: {
    backgroundColor: '#0174AB',
    color: '#FFFFFF',
    paddingTop: 50,
    flex: 1,
  },
  Labelstyle: {
    color: '#FFFFFF',
    marginLeft: 10,
    fontSize: 12,
  },
  styletextinput: {
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 3,
    color: '#FFFFFF',
    fontSize: 15,
    padding: 10,
    paddingTop: 2,
    backgroundColor: '#0174AB',
    marginTop: 5,
    margin: 10,
  },
  styletext: {
    marginBottom: 15,
    borderColor: '#FFFFFF',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#0174AB',
  },
  styletouchableopacity: {
    borderColor: '#FFFFFF',
    borderWidth: 3,
    paddingTop: 20,
    alignSelf: 'center',
    width: '80%',
    justifyContent: 'center',
    backgroundColor: '#0174AB',
    margin: 10,
    marginTop: 20,
  },
});


function mapStatetoProps(state) {
  console.log(state);
  return {
    Authentication: state.Authentication,
  }
}
function mapDispatchtoProps(dispatch) {
  return {
    signin_user: (credentials) => {
      dispatch(GET_ACTION_SIGNIN(credentials));
    }
  }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(SignInScreen);

