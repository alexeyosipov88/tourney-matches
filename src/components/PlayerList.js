import Player from "./Player";
import { preparePlayerData, addWinsToPlayers } from "./helpers/playerHelpers";



const PlayerList = ({playerData}) => {
  const players = playerData.map(player => {
    return <Player key={player.gamerTag} {... player}></Player>
  });
  return (

    <section className="PlayerList">
    <h1>Current participating players</h1>
    {players}
  </section>
  )

}

export default PlayerList;