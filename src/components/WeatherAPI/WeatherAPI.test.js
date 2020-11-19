import React from "react";
import { render } from "@testing-library/react";
import WeatherAPI from "./WeatherAPI";

describe("WeatherAPI tests", () => {
  it("should render", () => {
    expect(render(<WeatherAPI />)).toBeTruthy();
  });
});
