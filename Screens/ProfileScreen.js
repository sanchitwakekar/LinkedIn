import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => ({
    title: 'Profile',
  });
  // Render any loading content that you like here
  render() {
    return (
      <View>
        <View style={{ alignItems: 'center', paddingTop: 50 }}>
          <Image style={{
            marginLeft: 8,
            height: 100,
            width: 100,
            borderRadius: 40,
            borderWidth: 1
          }}
            source={require('../Assets/boy.png')} />
          <Text style={styles.item}>Username : {this.props.Authentication.username}</Text>
          <Text style={styles.item}>Skills : {this.props.Authentication.skills}</Text>
          <Text style={styles.item}>Company : {this.props.Authentication.company}</Text>
          <Text style={styles.item}>Position : {this.props.Authentication.position}</Text>
        </View>
      </View>
    );
  }
}
function mapStatetoProps(state) {
  return {
    Authentication: state.Authentication,
  }
}
const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
export default connect(mapStatetoProps)(ProfileScreen);
