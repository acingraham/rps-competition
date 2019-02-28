const entries = [
  {
    name: 'Abbie',
    code: function() {
      return 'rock';
    },
  },
  {
    name: 'Andrew',
    code: function() {
      return 'paper';
    },
  },
  {
    name: 'Elizabeth',
    code: function() {
      const rand = Math.random();
      if (rand < .33) {
        return 'rock';
      } else if (rand < .66) {
        return 'paper';
      } else {
        return 'scissors';
      }
    },
  },
  {
    name: 'Rohit',
    code: function() {
      return 'scissors';
    },
  },
  {
    name: 'Thomas',
    code: function(prev) {
      const rocks = prev.totalScores.rock;
      const papers = prev.totalScores.paper;
      const scissors = prev.totalScores.scissors;
      const total = rocks + papers + scissors;
      if (total === 0) {
        return 'rock';
      }
      const rand = Math.random();
      if (rand < rocks / total) {
        return 'paper';
      } else if (rand < ((rocks / total) + (papers / total))) {
        return 'scissors';
      } else {
        return 'rock';
      }
    },
  },
];

export default entries;
