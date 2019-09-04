import React from 'react';
import {
  
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
    View,
} from 'react-native';

import { connect } from 'react-redux';
import { GET_ACTION_REGISTER } from '../Actions/actionregister';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', confirmpassword: '', skills: '', company: '', position: '' };
  }
  static navigationOptions = {
    header: null
  }

  componentDidUpdate() {
    if (this.props.Authentication.registrationsuccessful === '1') {         
        this.props.navigation.navigate('SignIn');         
    }
  }

  registerAsync = async () => {

    try {
      if (this.state.username !== null && this.state.skills !== null && this.state.password !== null && this.state.company !== null && this.state.position !== null) {
        console.log(this.state.username + '  ' + this.state.password + '  ' + this.state.confirmpassword + '  ' + this.state.skills + '  ' + this.state.company + '  ' + this.state.position + '  ');
        this.props.register_user(this.state);
        // if (this.props.Authentication.registrationsuccessful === '1') {         
        //     this.props.navigation.navigate('SignIn');         
        // } else {
         
        //     this.state.username = '';
        //     this.state.skills = '';
        //     this.state.password = '';
        //     this.state.confirmpassword = '';
        //     this.state.company = '';
        //     this.state.position = '';
         
        // }
      }
    } catch (e) { }
  };

  render() {
    return (
      <View style={styles.rootstyle}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.MainLabel}>Join LinkedIn now, It's free</Text>
        <View>
          <Text style={styles.Labelstyle}>Username</Text>
          <TextInput
            style={styles.styletextinput}
            placeholder="Username"
            placeholderTextColor="#FFF"
            fontWeight='bold'
            onChangeText={username => this.setState({ username })}
            autoCapitalize="none"
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
            secureTextEntry
            value={this.state.password}
          />
        </View>

        <View>
          <Text style={styles.Labelstyle}>Confirm Password</Text>
          <TextInput
            style={styles.styletextinput}
            placeholderTextColor="#FFF"
            fontWeight='bold'
            secureTextEntry
            placeholder="Confirm Password"
            onChangeText={confirmpassword => this.setState({ confirmpassword })}
            secureTextEntry
            value={this.state.confirmpassword}
          />
        </View>

        <View>
          <Text style={styles.Labelstyle}>Skills</Text>
          <TextInput
            style={styles.styletextinput}
            placeholderTextColor="#FFF"
            fontWeight='bold'
            placeholder="Skills"
            onChangeText={skills => this.setState({ skills })}
            value={this.state.skills}
          />
        </View>

        <View>
          <Text style={styles.Labelstyle}>Company</Text>
          <TextInput
            style={styles.styletextinput}
            placeholderTextColor="#FFF"
            fontWeight='bold'
            placeholder="Company"
            onChangeText={company => this.setState({ company })}
            value={this.state.company}
          />
        </View>

        <View>
          <Text style={styles.Labelstyle}>Position</Text>
          <TextInput
            style={styles.styletextinput}
            placeholderTextColor="#FFF"
            fontWeight='bold'
            placeholder="Position"
            onChangeText={position => this.setState({ position })}
            value={this.state.position}
          />
        </View>

        <TouchableOpacity style={styles.styletouchableopacity} onPress={this.registerAsync}>
          <Text style={styles.styletext}>AGREE & JOIN</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootstyle: {
    backgroundColor: '#0174AB',
    color: '#FFFFFF',
    paddingTop: 30,
    flex: 1,
  },
  Labelstyle: {
    color: '#FFFFFF',
    marginLeft: 10,
    fontSize: 12,
  },
  MainLabel: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginLeft: 20,
    fontSize: 25,
    paddingBottom: 5,
  },
  styletextinput: {
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 4,
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
    alignSelf:'center',
    paddingTop: 20,
    width:'80%',
    justifyContent: 'center',
    backgroundColor: '#0174AB',
    margin: 10,
    marginTop: 20,
  },
});
function mapStatetoProps(state) {
  return {
    Authentication: state.Authentication,
  }
}
function mapDispatchtoProps(dispatch) {
  return {
    register_user: (credentials) => {
      dispatch(GET_ACTION_REGISTER(credentials));
    }
  }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(RegisterScreen);
