import logo from "./logo.svg";
import "./App.css";
import PlayerList from "./components/PlayerList";
import MatchList from "./components/MathList";
import matchData from "./data/matchData";
import playerData from "./data/playerData";
import {addWinsToPlayers, preparePlayerData} from "../src/components/helpers/playerHelpers"

function App() {
  const playersDataArr = preparePlayerData(playerData);
  const parsedPlayersData = addWinsToPlayers(playersDataArr, matchData);
  
  return (
    <div className="App">
      <span>Where Coding and Tournaments found their Match!</span>
      <PlayerList playerData={parsedPlayersData}/>
      <MatchList matchData={matchData}/>
    </div>
  );
}

export default App;
