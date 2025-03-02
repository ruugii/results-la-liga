interface MatchInterface {
  id: string;
  sport_key: string;
  sport_title: string;
  commence_time: string;
  completed: boolean;
  home_team: string;
  away_team: string;
  scores?: [{
    name: string;
    score: string;
  }]
  last_update: string;
}

export default MatchInterface;