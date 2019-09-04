import React from 'react';
import { 
  Button,  
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { GET_ACTION_LOGOUT } from '../Actions/actionlogout';

class LogoutScreen extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.logout_user();
  }
  
  componentDidUpdate() {
    this.props.logout_user();
    if (this.props.Authentication.isLoggedIn === '0') {
      this.props.navigation.navigate('Auth');
    }
  }
  _signOutAsync = async () => {
    try {
      this.props.logout_user();
      this.props.navigation.navigate('Auth');
    } catch (e) {

    }
  };
  static navigationOptions = ({ navigation }) => ({
    title: 'Logout',
  });
  render() {
    return (
      <View>
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>);
  }
}
function mapStatetoProps(state) {
  return {
    Authentication: state.Authentication,
  }
}
function mapDispatchtoProps(dispatch) {
  return {
    logout_user: () => {
      dispatch(GET_ACTION_LOGOUT());
    }
  }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(LogoutScreen);

