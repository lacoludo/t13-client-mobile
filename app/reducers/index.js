import * as types from "../actions/actionTypes";
import * as actions from "../actions/actions";
import React, {
  Component,
  ScrollView,
  Text,
  View,
  Image,
  Dimensions
} from "react-native";
let userData;

const initialState = {
  navColor: "#fff",
  navStyle: { backgroundColor: "#000", color: "#fff", padding: 20 },
  userDeets: {
    email: "email@lacoludo.com",
    first_name: "Ludovic",
    last_name: "Lacouture",
    image:
      "https://media.licdn.com/dms/image/C4E03AQHZ5kAxawJlog/profile-displayphoto-shrink_200_200/0?e=1526684400&v=alpha&t=uHoND5Ek9KGttk6QiTY71wEpwfRqmfLWvnq7RVMNKi8"
  },
  favorites: {},
  listings: {},
  navigator: "",
  navProps: {
    name: "",
    type: "menu",
    icon: "menu"
  }
};

export const t13 = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.LOGIN:
      return { ...state, userDeets: userData };

    case types.NAV:
      return {
        ...state,
        navigator: action.navigator
      };

    case types.NAVTO:
      console.log("Moving nave to " + action.props);
      state.navigator.replace({
        id: action.props,
        name: action.props
      });

      return {
        ...state,
        openMenu: false
      };

    case types.NAV_TO_POP:
      return {
        ...state,
        navProps: { name: action.name, type: "pop", icon: "arrow-back" }
      };

    case types.CHANGE_NAV_STYLE:
      console.log(action.prop);

      if (action.prop == "light") {
        return {
          ...state,
          navStyle: { backgroundColor: "#fff", color: "#444" },
          navProps: {
            name: "",
            type: "menu",
            icon: "menu"
          }
        };
      } else if (action.prop == "dark") {
        return {
          ...state,
          navStyle: { backgroundColor: "#000", color: "#fff" },
          navProps: {
            name: "",
            type: "menu",
            icon: "menu"
          }
        };
      }

    default:
      return state;
  }
}
