import Match from "./Match";

const MatchList = ({matchData}) => {
  const matches = matchData.map(match => {
    return <Match key={match.matchNumber} {... match}></Match>
  });

  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {matches}
    </section>
  );
};

export default MatchList;
