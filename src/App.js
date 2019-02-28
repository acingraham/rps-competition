import React, { Component } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import logo from './logo.svg';
import './App.css';
import entries from './entries';
import Results from './Results';

const emptyObject = {
  rock: 0,
  paper: 0,
  scissors: 0,
};

const initialState = {
  entries,
  results: {
    totalScores: {
      rock: 0,
      paper: 0,
      scissors: 0,
    },
    roundScores: [],
    roundChoices: [],
  },
};

class App extends Component {
  state = cloneDeep(initialState);

  getTotalScores = (prevTotals, round) => ({
    rock: prevTotals.rock + round.rock,
    scissors: prevTotals.scissors + round.scissors,
    paper: prevTotals.paper + round.paper,
  });

  playRound = () => {
    const {entries, results} = this.state;
    const roundScores = {
      rock: 0,
      paper: 0,
      scissors: 0,
    };

    const roundChoices = {};

    for (const entry of entries) {
      const result = entry.code(results);
      // TODO - validate result is rock, paper, or scissors
      roundChoices[entry.name] = result;
      roundScores[result]++;
    }

    this.setState(state => ({
      ...state,
      results: {
        totalScores: this.getTotalScores(state.results.totalScores, roundScores),
        roundChoices: state.results.roundChoices.concat(roundChoices),
        roundScores: state.results.roundScores.concat(roundScores),
      },
    }));
  };

  play = (roundsRemaining = 10) => {
    if (roundsRemaining > 0) {
      this.playRound();
      setTimeout(() => this.play(roundsRemaining - 1), 1000);
    }
  };

  reset = () => {
    const newState = cloneDeep(initialState);
    this.setState(newState);
  };


  render() {
    return (
      <div className="App">
        {/*<button onClick={this.playRound}>Play Round</button>*/}
        <button onClick={() => this.play()}>Play</button>
        <button onClick={this.reset}>Reset</button>
        <Results results={this.state.results} names={this.state.entries.map(entry => entry.name)} />
      </div>
    );
  }
}

export default App;
