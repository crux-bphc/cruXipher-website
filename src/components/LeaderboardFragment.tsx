import Twemoji from "./Twemoji";

const LeaderboardFragment = ({ className }: { className?: string }) => {
  let teams = [
    { rank: 1, name: "NeedToSeekHelp", earned: 420, penalty: 10, points: 410 },
    { rank: 2, name: "Wall Socket MMMM", earned: 360, penalty: 0, points: 360 },
    { rank: 3, name: "MyLifeAMovie", earned: 340, penalty: 30, points: 310 },
    { rank: 4, name: "🐟", earned: 300, penalty: 10, points: 290 },
    { rank: 5, name: "Vtuber Vore", earned: 280, penalty: 0, points: 280 },
    { rank: 6, name: "Kokomi", earned: 360, penalty: 90, points: 270 },
    { rank: 7, name: "GG EZ NO RE", earned: 300, penalty: 40, points: 260 },
    { rank: 8, name: "I love sodium", earned: 300, penalty: 50, points: 250 },
    {
      rank: 9,
      name: "PayForOurTherapy",
      earned: 270,
      penalty: 30,
      points: 240,
    },
    { rank: 10, name: "WeLoveFORTRAN", earned: 260, penalty: 30, points: 230 },
  ];
  return (
    <>
      <div
        className={`fixed right-8 top-24 grid grid-cols-2 h-fit gap-6 border-dashed border-opacity-30 pl-12 py-8 border-white border ${className}`}
      >
        <span className="text-2xl font-bold text-center">Team Name</span>
        <span className="text-2xl font-bold text-center">Score</span>
        {teams.map((team) => (
          <>
            <span className="text-xl">
              <Twemoji emoji={team.rank + ". " + team.name} />
            </span>
            <span className="text-xl text-center">{team.points} Points</span>
          </>
        ))}
      </div>
    </>
  );
};

export default LeaderboardFragment;
