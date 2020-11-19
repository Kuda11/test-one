import React from "react";
import { render } from "@testing-library/react";
import FootballTeam11 from "./FootballTeam11";

describe("FootballTeam11 tests", () => {
  it("should render", () => {
    expect(render(<FootballTeam11 />)).toBeTruthy();
  });
});
