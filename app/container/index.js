
// firebaseApp.database().ref().on("value", (snap) => {console.log(snap.val())})

import React, { Component } from "react";
import { DrawerLayoutAndroid, View, Text } from "react-native";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import * as reducers from "../reducers";
import Components from "../components";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class Index extends Component {
  navigationView() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: "left" }}>
          I'm in the Drawer!
        </Text>
      </View>
    );
  }
  render() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => this.navigationView()}
      >
        <Provider store={store}>
          <Components />
        </Provider>
      </DrawerLayoutAndroid>
    );
  }
}
