import logo from "./logo.svg";
import "./App.css";
import PlayerList from "./components/PlayerList";
import MatchList from "./components/MathList";

function App() {
  return (
    <div className="App">
      Tourney Matches{" "}
      <span>Where Coding and Tournaments found their Match!</span>
      <PlayerList/>
      <MatchList/>
    </div>
  );
}

export default App;
