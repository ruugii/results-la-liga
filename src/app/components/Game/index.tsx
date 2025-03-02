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
              match.scores ? (match.scores.map((score: {
                name: string;
                score: string;
              }, index: number) => (
                index === 0 ? (
                  `${score.name} ${score.score} - `
                ) : (
                  `${score.score} ${score.name}`
                )
              ))) : (match.home_team + ' vs ' + match.away_team)
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