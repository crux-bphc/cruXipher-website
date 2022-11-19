interface RankedTeam {
  rank: number;
  username: string;
  pointsEarned: number;
  points: number;
  bonus: number;
  penalty: number;
  lastEarned: string;
}

export default interface Leaderboard {
  self: RankedTeam;
  leaderboard: RankedTeam[];
}
