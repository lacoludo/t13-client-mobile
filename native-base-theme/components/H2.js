import { Platform } from "react-native";
import _ from "lodash";

import variable from "./../variables/platform";

export default (variables = variable) => {
  const h2Theme = {
    color: variables.textColor,
    fontSize: variables.fontSizeH2,
    lineHeight: variables.lineHeightH2,
    fontFamily: variables.titleFontfamily
  };

  return h2Theme;
};
