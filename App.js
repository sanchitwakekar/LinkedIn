/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

//Screens
import HomeScreenTab from './Screens/HomeScreenTab';
import SearchScreenTab from './Screens/SearchScreenTab';
import AuthLoadingScreen from './Screens/AuthLoadingScreen';
import DetailsScreen from './Screens/DetailsScreen';
import SignInScreen from './Screens/SignInScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SupportScreen from './Screens/SupportScreen';
import RegisterScreen from './Screens/RegisterScreen';
import LogoutScreen from './Screens/LogoutScreen';
import customNavigator from './Screens/customNavigator';

//Redux imports
import { createStore, applyMiddleware, createStoreWithMiddleware } from 'redux';
import { rootreducer } from './Reducers';
import { RootSaga } from './Middleware/index';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';


//SplashScreen
import SplashScreen from 'react-native-splash-screen';

//Redux Storage
import * as storage from 'redux-storage';
import { compose } from 'redux';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';

const saga = createSagaMiddleware();
//const store = createStore(rootreducer, applyMiddleware);

const reducer = storage.reducer(rootreducer);
const engine = createEngine('saveuser');
const middleware = storage.createMiddleware(engine);
const store = createStore(reducer, compose(applyMiddleware(saga), applyMiddleware(middleware)));
saga.run(RootSaga);
const load = storage.createLoader(engine);
load(store);

const HomeStack = createStackNavigator({
  HomeScreen: HomeScreenTab,
  Details: DetailsScreen,
});
const AppStack = createBottomTabNavigator({
  HomeScreen: HomeStack,
  Search: SearchScreenTab,
});
const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
  Register: RegisterScreen,
});
const DrawerNavigator = createDrawerNavigator(
  {
    Home: AppStack,
    Profile: ProfileScreen,
    Support: SupportScreen,
    Logout: LogoutScreen,
  },
  {
    hideStatusBar: true,
    contentComponent: customNavigator,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  },
);

const Navigator = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: DrawerNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

class App extends React.Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
export default App;