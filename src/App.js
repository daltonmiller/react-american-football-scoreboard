//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //const [lightOn, setLightOn] = useState(false)
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  //
  const [teamOnePoints, setPoints] = useState(0);
const [teamTwoPoints, setPoints2] = useState(0);
const fieldGoal = e => {
  setPoints(teamOnePoints + 3);
  //setPoints2(teamTwoPoints + 3)
}
const fieldGoal2 = e => {
  setPoints2(teamTwoPoints + 3);
  //setPoints2(teamTwoPoints + 3)
}
const Touchdown = e => {
  setPoints(teamOnePoints + 7)
  //setPoints2(teamTwoPoints + 7)
}
const Touchdown2 = e => {
  setPoints2(teamTwoPoints + 7)
  //setPoints2(teamTwoPoints + 7)
}
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Tigers</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{teamOnePoints}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{teamTwoPoints}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          
          <button className="homeButtons__touchdown" onClick={Touchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={fieldGoal}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={Touchdown2}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={fieldGoal2}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
