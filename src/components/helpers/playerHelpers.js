const preparePlayerData = (players) => {
  return Object.values(players);
}

const addWinsToPlayers = (players, matches) => {
  return package.map(element => {
    const numberOfwins = 0;
    for(let i = 0; i < matches.length; i++) {
      if(matches[i].winner == element.gamerTag) {
        numberOfwins++;
      }
    }
    element.wins = numberOfwins;
    return element;
  });

}

export {preparePlayerData, addWinsToPlayers};