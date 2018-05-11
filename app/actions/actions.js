import * as types from "./actionTypes";

export const login = (navProps, res) => {
  console.log(res);
  return {
    type: types.LOGIN,
    nav: navProps,
    data: res
  };
}

export const setNav = (nav) => {
  console.log(nav);
  return {
    type: types.NAV,
    navigator: nav
  };
}

export const changeNav = (propz) => {
  console.log(propz);
  return {
    type: types.CHANGE_NAV_STYLE,
    prop: propz
  };
}

export const navToPop = (propz) => {
  console.log(propz);
  return {
    type: types.NAV_TO_POP,
    name: propz
  };
}

export const navigate = (id) => {
  return {
    type: types.NAVTO,
    props: id
  };
}
