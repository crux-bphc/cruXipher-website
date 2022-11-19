import { Pagination } from "@mantine/core";
import { IconX } from "@tabler/icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Twemoji from "../components/Twemoji";
import { useGlobalContext } from "../context/globalContext";
import LeaderboardType from "../types/Leaderboard";

const Leaderboard = () => {
  const navigate = useNavigate();
  if (!sessionStorage.getItem("token")) navigate("/login");

  const [isLoaded, setIsLoaded] = useState(false);
  const [teams, setTeams] = useState({} as LeaderboardType);
  const { globalDispatch } = useGlobalContext();
  const [numberOfPages, setNumberOfPages] = useState(1);
  const handlePagination = async (page: number) => {
    setIsLoaded(false);
    const response = await fetch(
      (import.meta.env.VITE_BACKEND_URL
        ? import.meta.env.VITE_BACKEND_URL
        : "") +
        "/api/leaderboard/" +
        String(page),
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        mode: "cors",
      }
    );
    const result = await response.json();
    if (response.status === 200) {
      setTeams(result);
      setIsLoaded(true);
    } else {
      globalDispatch({
        type: "send notification",
        payload: {
          disallowClose: false,
          autoClose: 3000,
          className: "pb-24 mb-24",
          color: "red",
          title: result.message,
          radius: "xs",
          icon: <IconX size={18} />,
          id: "submit-flag",
          loading: false,
          message: undefined,
        },
      });
    }
  };

  useEffect(() => {
    const loadNumberOfPages = async () => {
      const result = await fetch(
        (import.meta.env.VITE_BACKEND_URL
          ? import.meta.env.VITE_BACKEND_URL
          : "") + "/api/leaderboardpages",
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
          mode: "cors",
        }
      );
      const json = await result.json();
      if (result.status === 200) {
        setNumberOfPages(json.message);
      } else {
        globalDispatch({
          type: "show error",
          payload: {
            title: json.message,
            icon: <IconX size={18} />,
            message: undefined,
          },
        });
      }
    };
    const loadInitialPage = async () => {
      const result = await fetch(
        (import.meta.env.VITE_BACKEND_URL
          ? import.meta.env.VITE_BACKEND_URL
          : "") + "/api/leaderboard/1",
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
          mode: "cors",
        }
      );
      const json = await result.json();
      if (result.status === 200) {
        setIsLoaded(true);
        setTeams(json);
      } else {
        setIsLoaded(true);
        globalDispatch({
          type: "show error",
          payload: {
            title: json.message,
            icon: <IconX size={18} />,
            message: undefined,
          },
        });
      }
    };
    loadNumberOfPages();
    loadInitialPage();
  }, []);

  // let teams = [
  //   { rank: 1, name: "NeedToSeekHelp", earned: 420, penalty: 10, points: 410 },
  //   { rank: 2, name: "Wall Socket MMMM", earned: 360, penalty: 0, points: 360 },
  //   { rank: 3, name: "MyLifeAMovie", earned: 340, penalty: 30, points: 310 },
  //   { rank: 4, name: "🐟", earned: 300, penalty: 10, points: 290 },
  //   { rank: 5, name: "Vtuber Vore", earned: 280, penalty: 0, points: 280 },
  //   { rank: 6, name: "Kokomi", earned: 360, penalty: 90, points: 270 },
  //   { rank: 7, name: "GG EZ NO RE", earned: 300, penalty: 40, points: 260 },
  //   { rank: 8, name: "I love sodium", earned: 300, penalty: 50, points: 250 },
  //   {
  //     rank: 9,
  //     name: "PayForOurTherapy",
  //     earned: 270,
  //     penalty: 30,
  //     points: 240,
  //   },
  //   { rank: 10, name: "WeLoveFORTRAN", earned: 260, penalty: 30, points: 230 },
  // ];
  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="flex flex-col align-middle">
        <div className="flex flex-col align-middle pt-16 px-32 sm:px-28">
          <span className="text-3xl font-bold text-center">LEADERBOARD</span>
          <div className="grid grid-cols-5 gap-4 pt-8">
            <span className="text-2xl font-bold text-center">Team Name</span>
            <span className="text-2xl font-bold text-center">
              Points Earned
            </span>
            <span className="text-2xl font-bold text-center">Bonus</span>
            <span className="text-2xl font-bold text-center">Penalty</span>
            <span className="text-2xl font-bold text-center">Score</span>

            <span className="text-xl pl-16">
              {teams.self.rank}. {teams.self.username}
            </span>
            <span className="text-xl text-center">
              {teams.self.pointsEarned}
            </span>
            <span className="text-xl text-center">{teams.self.bonus}</span>
            <span className="text-xl text-center">{teams.self.penalty}</span>
            <span className="text-xl text-center">
              {teams.self.points} Points
            </span>

            <div className="col-span-5 border-dashed border-opacity-30 border-white w-full border-b"></div>
            {teams.leaderboard.map((team) => (
              <>
                <span className="text-xl pl-16">
                  <Twemoji emoji={team.rank + ". " + team.username} />
                </span>
                <span className="text-xl text-center">{team.pointsEarned}</span>
                <span className="text-xl text-center">{team.bonus}</span>
                <span className="text-xl text-center">{team.penalty}</span>
                <span className="text-xl text-center">
                  {team.points} Points
                </span>
              </>
            ))}
          </div>

          <Pagination
            size="lg"
            total={numberOfPages}
            siblings={1}
            initialPage={1}
            withEdges
            onChange={handlePagination}
            className="self-center py-10 border-none"
          />
        </div>
      </div>
    );
  }
};

export default Leaderboard;
