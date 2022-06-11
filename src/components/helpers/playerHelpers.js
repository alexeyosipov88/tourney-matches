const preparePlayerData = (players) => {
  return Object.values(players);
}

const addWinsToPlayers = (players, matches) => {
  
  return players.map(element => {
    let  numberOfwins = 0;
    for(let i = 0; i < matches.length; i++) {
      if(matches[i].winner === element.gamerTag) {
        numberOfwins++;
      }
    }
    element.wins = numberOfwins;
    console.log(element);

    return element;
  });

}

export {preparePlayerData, addWinsToPlayers};