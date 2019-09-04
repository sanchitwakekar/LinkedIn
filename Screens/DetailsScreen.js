import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View,
} from 'react-native';

class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    navigation = this.props.navigation;
    const Person = navigation.getParam('Person', 'NO-ID');
    const Position = navigation.getParam('Position', '0');
    const days = navigation.getParam('days', '0');
    const Body = navigation.getParam('Body', '0');
    const Likes = navigation.getParam('Likes', '0');
    const Comments = navigation.getParam('Comments', '0');
    const Shares = navigation.getParam('shares', '0');
    const Poster = navigation.getParam('Poster', '0');

    return (
      <View>
        <View style={{elevation:5}}>
          <View style={styles.UserHead}>
            {
              <View style={styles.Header}>
                <Image
                  source={require('../Assets/boy.png')}
                  style={styles.rounded_profile}
                />
                <View style={{ flexDirection: 'column' }}>
                  <Text style={styles.personName}> {Person}</Text>
                  <Text> {Position}</Text>
                  <Text> {days}</Text>
                </View>
              </View>
            }
          </View>

          <View style={styles.Body}>
            <Text >
              {Body}
            </Text>
            <Image
              style={{ height: 200, width: 200 }}
              source={{ uri: '' + Poster }}
            />
          </View>
          <View style={styles.FooterBox}>
            <View style={styles.like_comment_share_style}>
              <Text style={styles.BottomText}> {Likes} Like</Text>
            </View>
            <View style={styles.like_comment_share_style}>
              <Text style={styles.BottomText}> {Comments} comment</Text>
            </View>
            <View style={styles.like_comment_share_style}>
              <Text style={styles.BottomText}>{Shares} share</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  UserHead: {
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
    margin: 5,
    padding: 10
  },

  Header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center'
  },

  rounded_profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 2
  },

  personName: {
    fontWeight: "bold",
    padding: 2
  },

  profileVerified: {
    color: 'dodgerblue'
  },

  profileScreen: {
    fontSize: 14,
    color: 'gray',
    padding: 2
  },

  Body: {
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
    margin: 5,
    padding: 10
  },

  FooterBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  

  like_comment_share_style: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    color: 'grey'
  },

  BottomText: {
    color: 'gray'
  },

 
});

export default DetailsScreen;
