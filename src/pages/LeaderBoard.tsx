import { Pagination } from "@mantine/core";
import Twemoji from "../components/Twemoji";

const LeaderBoard = () => {
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
    <div className="flex flex-col align-middle">
      <div className="flex flex-col align-middle pt-16 px-32">
        <span className="text-4xl font-bold text-center">LEADERBOARD</span>
        <div className="grid grid-cols-4 gap-4 pt-8">
          <span className="text-3xl font-bold text-center">Team Name</span>
          <span className="text-3xl font-bold text-center">Points Earned</span>
          <span className="text-3xl font-bold text-center">Penalty</span>
          <span className="text-3xl font-bold text-center">Score</span>

          <span className="text-2xl pl-16">8. I love sodium</span>
          <span className="text-2xl text-center">290</span>
          <span className="text-2xl text-center">30</span>
          <span className="text-2xl text-center">260 Points</span>

          <div className="col-span-4 border-dashed border-opacity-30 border-white w-full border-b"></div>
          {teams.map((team) => (
            <>
              <span className="text-2xl pl-16">
                <Twemoji emoji={team.rank + ". " + team.name} />
              </span>
              <span className="text-2xl text-center">{team.earned}</span>
              <span className="text-2xl text-center">{team.penalty}</span>
              <span className="text-2xl text-center">{team.points} Points</span>
            </>
          ))}
        </div>

        <Pagination
          size="xl"
          total={20}
          siblings={1}
          initialPage={10}
          withEdges
          className="self-center py-8 border-none"
        />
      </div>
    </div>
  );
};

export default LeaderBoard;
