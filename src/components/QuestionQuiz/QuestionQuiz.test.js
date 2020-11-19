import React from "react";
import { render } from "@testing-library/react";
import QuestionQuiz from "./QuestionQuiz";

describe("QuestionQuiz tests", () => {
  it("should render", () => {
    expect(render(<QuestionQuiz />)).toBeTruthy();
  });
});
