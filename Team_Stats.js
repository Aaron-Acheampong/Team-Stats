const team = {
    _players: [
      {firstName: 'Cristiano', lastName: 'Ronaldo',age: 36},
       {firstName: 'Lionel', lastName: 'Messi',age: 34},
        {firstName: 'Asamoah', lastName: 'Gyan',age: 70}
    ],
  
  
    _games: [
      {
    opponent: 'Liverpool',
    teamPoints: 42,
    opponentPoints: 27
  },
  {
    opponent: 'Chelsea',
    teamPoints: 40,
    opponentPoints: 30
  },
  {
    opponent: 'Arsenal',
    teamPoints: 27,
    opponentPoints: 24
  }
    ],
  
    get players(){ return this._players; },
  
     get games(){ return this._games; },
  
     addPlayer(firstName, lastName, age){
       let newPlayer = { firstName: firstName,
        lastName: lastName, 
        age: age};
  
        team._players.push(newPlayer);
     },
  
     addGame(opponent, teamPoints, opponentPoints){
       let newGame = {opponent: opponent,  
      teamPoints: teamPoints,
       opponentPoints: opponentPoints};
  
       team._games.push(newGame);
  
     }
  
  
  
  
  };
  
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  console.log(team._players);
  
  team.addGame('Titans', 100, 98);
  team.addGame('Bulls', 98, 91);
  team.addGame('Heats', 89, 94);
  
  console.log(team._games);