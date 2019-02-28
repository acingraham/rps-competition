import React from 'react';
import range from 'lodash/range';
import FlipMove from 'react-flip-move';

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

const ICONS = {
  [ROCK]: '🤘',
  [PAPER]: '📰',
  [SCISSORS]: '✂',
};

const getScore = (roundScore, choice) => {
  const lowercaseChoice = choice;

  if (lowercaseChoice === ROCK) {
    return roundScore[SCISSORS] - roundScore[PAPER];
  } else if (lowercaseChoice === PAPER) {
    return roundScore[ROCK] - roundScore[SCISSORS];
  } else if (choice === SCISSORS) {
    return roundScore[PAPER] - roundScore[ROCK];
  }

  // TODO - Handle case where user provided invalid input
};

const buildTable = (names, results) => {
  const {roundScores} = results;
  const table = [];
  for (let name of names) {
    const row = [name];
    let total = 0;
    for (const [index, roundChoice] of results.roundChoices.entries()) {
      const choice = roundChoice[name];
      // TODO - Need to handle other casings and invalid entries
      const icon = ICONS[choice];
      const score = getScore(roundScores[index], choice);
      total += score;
      const sign = score > 0 ? '+' : '';
      row.push(`${icon} (${sign}${score})`);
    }
    row.push(total);
    table.push(row);
  }

  return table;
};

const Results = ({names, results}) => {
  const table = buildTable(names, results);
  table.sort((r1, r2) => r2[r2.length - 1] - r1[r1.length - 1]);

  const tableHeader = ['Name', ...range(1, 1 + results.roundChoices.length), 'Total'];

  return (
    <FlipMove>
      <thead>
        <tr>
          {
            tableHeader.map(cell => <td>{cell}</td>)
          }
        </tr>
      </thead>
      {
        table.map(row => (
          <tr key={row[0]}>
            {
              row.map(cell => <td>{cell}</td>)
            }
            </tr>
        ))
      }
    </FlipMove>
  );
};

export default Results;
