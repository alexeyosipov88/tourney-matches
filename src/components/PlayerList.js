import Player from "./Player";
import playerData from "../data/playerData";
import matchData from "../data/matchData"



const PlayerList = () => {
  const playersArr = Object.values(playerData);

  return (

    <section className="PlayerList">
    <h1>Current participating players</h1>
    <Player></Player>
  </section>
  )

}

export default PlayerList;