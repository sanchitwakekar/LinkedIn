import React from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { GET_ACTION_POST_REQUEST_STORY } from '../Actions/actionpoststory';
import { Headernavigator } from '../Components/headernavigator'

class HomeScreenTab extends React.Component {
  constructor(props) {
    super(props);
    this.props.search_stories();
    console.log(this.props.Story.StoryList);
  }
  componentDidMount() {
    this.props.search_stories();
    console.log(this.props.Story.StoryList);
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'HomeScreen',
    headerLeft: <Headernavigator navigation={navigation} />
  });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.Story.array}

          renderItem={({ item }) => {
            console.log(item);
            return (
              
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('Details', {
                    Name: item.Title,
                    Poster: item.Poster,
                    Person: item.Person,
                    Position: item.Position,
                    days: item.days,
                    Likes: item.Likes,
                    Comments: item.Comments,
                    shares: item.shares,
                    Body: item.Body,
                  });
                }}>
                  <View>
                    <View style={styles.UserHead}>
                      {
                        <View style={styles.Header}>
                          <Image
                            source={require('../Assets/boy.png')}
                            style={styles.rounded_profile}
                          />
                          <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.personName}> {item.Person}</Text>
                            <Text> {item.Position}</Text>
                            <Text> {item.days}</Text>
                          </View>
                        </View>
                      }
                    </View>

                    <View style={styles.Body}>
                      <Text >
                        {item.Body}
                      </Text>
                      <Image
                        style={{ height: 200, width: 200 }}
                        source={{ uri: item.Poster }}
                      />
                    </View>
                    <View style={styles.FooterBox}>
                      <View style={styles.like_comment_share_style}>
                        <Text style={styles.BottomText}> Like</Text>
                      </View>
                      <View style={styles.like_comment_share_style}>
                        <Text style={styles.BottomText}> comment</Text>
                      </View>
                      <View style={styles.like_comment_share_style}>
                        <Text style={styles.BottomText}> share</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              
            )
          }
          }
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  UserHead: {
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
    elevation:5,
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

function mapStatetoProps(state) {
  console.log(state)
  return {
    Story: state.Story.StoryList,
  }
}
function mapDispatchtoProps(dispatch) {
  return {
    search_stories: () => {
      dispatch(GET_ACTION_POST_REQUEST_STORY());
    }
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(HomeScreenTab);
