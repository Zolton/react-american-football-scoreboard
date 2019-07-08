//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [teamName, setHomeTeamName] = useState("Lions");

  const addThree = () => {
    setHomeScore(homeScore + 3);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{teamName}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
            {/* Attempted to spin off Home and Away scores into their own components, but failed.  I'd need to read up 
          on how to pass useState between components, and I'm not sure if that's possible or even a best practice */}
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            className="homeButtons__touchdown"
            onClick={() => {
              setHomeScore(homeScore + 7);
            }}
            // In-line example
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={addThree}
            // Wanted to see if I could use a callback function.  It works!
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => {
              setAwayScore(awayScore + 7);
            }}
          >
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => {
              setAwayScore(awayScore + 3);
            }}
          >
            Away Field Goal
          </button>

          {
            // Played around with an input box to change team name.  Didn't work
            /* <input
          type="text"
          value={teamName}
          placeholder="Set Home Team Name"
          onChange={()=>setHomeTeamName("")}
          /> */
          }
        </div>
      </section>
    </div>
  );
}

export default App;
