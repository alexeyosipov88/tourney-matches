import Player from "./Player";
import playerData from "../data/playerData";
import matchData from "../data/matchData";
import { preparePlayerData } from "./helpers/playerHelpers";
import { addWinsToPlayers } from "./helpers/playerHelpers";



const PlayerList = () => {

  return (

    <section className="PlayerList">
    <h1>Current participating players</h1>
    <Player></Player>
  </section>
  )

}

export default PlayerList;