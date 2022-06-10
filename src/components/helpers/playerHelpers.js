const preparePlayerData = (players) => {
  return Object.values(players);
}

const addWinsToPlayers = (players, matches) => {

  players.forEach(element => {
    const numberOfwins = 0;
    for(let i = 0; i < matches.length; i++) {

      if(matches[i].winner == element.gamerTag) {
        numberOfwins++;
      }
    }
    element.wins = numberOfwins;

  });

}