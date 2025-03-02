import MatchInterface from "@/interface/Match/Matchinterface";

interface GameProps {
  match: MatchInterface;
}

export default function Game(props: GameProps) {

  const {
    match
  } = props;

  return (
    <div>
      {match.completed ? (
        <>
          <h1>
            {
              match.scores[0].name + ' ' + match.scores[0].score + ' - ' + match.scores[1].score + ' ' + match.scores[1].name
            }
          </h1>
          <h2> ACABADO - {new Date(match.commence_time).toLocaleDateString() + ' ' + new Date(match.commence_time).toLocaleTimeString()}</h2>
        </>
      ) : (
        <>
          <h1>
            {
              match.home_team + ' vs ' + match.away_team
            }
          </h1>
          <h2> INICIA - {new Date(match.commence_time).toLocaleDateString() + ' ' + new Date(match.commence_time).toLocaleTimeString()}</h2>
        </>
      )}
    </div>
  )
}