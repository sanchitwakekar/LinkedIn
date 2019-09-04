import React from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';


class SupportScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => ({
    title: 'Support',
  });

  render() {
    return (
      <View style={{ paddingBottom: 50, alignItems: 'center' }}>
        <Text style={style.TextStyle}>Important: Currently, we don't offer a phone number for customer support. Some websites will advertise LinkedIn phone support for a fee. These websites aren't affiliated with LinkedIn in any way and we're proactively working on taking action on them. Keep in mind that we don't charge for customer support and we'll never ask you for your password or access to your computer.</Text>

        <Text style={style.TextStyle}>If you believe someone else may be accessing your account and you no longer have access, please report a hacked account to us so that we can help you regain access.</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  TextStyle: {
    paddingTop: 50,
    margin: 10,
    fontSize: 16,

  },
});

export default SupportScreen;
