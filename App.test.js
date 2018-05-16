import React from "react";
import renderer from "react-test-renderer";

import { AppNavigator } from "./App";

it("renders without crashing", () => {
  const rendered = renderer.create(<AppNavigator />).toJSON();
  expect(rendered).toBeTruthy();
});
