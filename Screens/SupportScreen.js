import React from 'react';
import {
  View,
} from 'react-native';
import { WebView } from 'react-native-webview'


class SupportScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => ({
    title: 'Support',
  });

  render() {
    return (
      <View>
        <WebView
          source={{ uri: 'https://www.linkedin.com/help/linkedin?lang=en' }}
          style={{ marginTop: 20 }}
        />
      </View>
    );
  }
}

export default SupportScreen;
