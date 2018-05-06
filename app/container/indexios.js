import * as firebase from "firebase";

// firebaseApp.database().ref().on("value", (snap) => {console.log(snap.val())})

import React, { Component } from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import * as reducers from "../reducers";
import Components from "../components/index";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

const config = {
  apiKey: "AIzaSyBKQMJwcNRlodeEYP_lCMUQY91Q-ER7Vp0",
  authDomain: "t13-database.firebaseapp.com",
  databaseURL: "https://t13-database.firebaseio.com",
  projectId: "t13-database",
  storageBucket: "t13-database.appspot.com",
  messagingSenderId: "634747026122"
};

const firebaseApp = firebase.initializeApp(config);

export default class Index extends Component {
  componentDidMount() {}
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <Provider store={store}>
          <Components />
        </Provider>
      </View>
    );
  }
}
