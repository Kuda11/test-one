import React from "react";
import { Router } from "@reach/router";
import WeatherAPI from "../components/WeatherAPI"
import QuestionQuiz from "../components/QuestionQuiz"
import FootballTeam11 from "../components/FootballTeam11"


const Routes = () => {

  return (
    <Router>
        <WeatherAPI path='weather'/>
        <QuestionQuiz path='quiz'/>
        <FootballTeam11 path='football'/>
    </Router>
  );
};

export default Routes;
