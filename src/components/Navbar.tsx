import { IconX } from "@tabler/icons";
import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";
import LinkButton from "./LinkButton";
import useInterval from "../hooks/useInterval";

const Navbar = () => {
  const [points, setPoints] = useState(0);
  const [time, setTime] = useState(
    new Date(1669458600000 - new Date().getTime())
  );
  const navigate = useNavigate();
  const { globalDispatch } = useGlobalContext();

  const logout = async () => {
    const res = await fetch(
      (import.meta.env.VITE_BACKEND_URL
        ? import.meta.env.VITE_BACKEND_URL
        : "") + "/api/logout",
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        mode: "cors",
      }
    );
    const result = await res.json();
    if (res.status === 200) {
      sessionStorage.clear();
      navigate("/login");
    } else {
      globalDispatch({
        type: "show error",
        payload: {
          title: result.message,
          icon: <IconX size={18} />,
          message: undefined,
        },
      });
    }
  };

  const updateTimer = async () => {
    const loadTimer = async () => {
      const res = await fetch(
        (import.meta.env.VITE_BACKEND_URL
          ? import.meta.env.VITE_BACKEND_URL
          : "") + "/api/time",
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
      const result = await res.json();
      if (res.status === 200) {
        setTime(new Date(result.timeLeft));
      } else {
        globalDispatch({
          type: "show error",
          payload: {
            title: result.message,
            icon: <IconX size={18} />,
            message: undefined,
          },
        });
      }
    };
    loadTimer();
  };

  const updatePoints = async () => {
    const loadPoints = async () => {
      const res = await fetch(
        (import.meta.env.VITE_BACKEND_URL
          ? import.meta.env.VITE_BACKEND_URL
          : "") + "/api/points",
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
      const result = await res.json();
      if (res.status === 200) {
        setPoints(result.points);
      } else {
        globalDispatch({
          type: "show error",
          payload: {
            title: result.message,
            icon: <IconX size={18} />,
            message: undefined,
          },
        });
      }
    };
    loadPoints();
  };

  useEffect(() => {
    const loadPoints = async () => {
      const res = await fetch(
        (import.meta.env.VITE_BACKEND_URL
          ? import.meta.env.VITE_BACKEND_URL
          : "") + "/api/points",
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
      const result = await res.json();
      if (res.status === 200) {
        setPoints(result.points);
      } else {
        globalDispatch({
          type: "show error",
          payload: {
            title: result.message,
            icon: <IconX size={18} />,
            message: undefined,
          },
        });
      }
    };
    loadPoints();
  }, []);

  useInterval(() => {
    setTime(new Date(time.getTime() - 1000));
  }, 1000);

  useInterval(() => {
    updatePoints();
  }, 60000);

  useInterval(() => {
    updateTimer();
  }, 60000);

  return (
    <>
      <nav className="flex justify-between items-center px-6 py-2">
        <div className="left-nav flex items-center gap-8 sm:flex-col lg:flex-row">
          <Link className="font-bold text-4xl" to="/">
            cruXipher
          </Link>
          <div className="flex gap-6 pt-2">
            <LinkButton
              linkText="[about]"
              url="/about"
              className="decoration-white/0 hover:decoration-white/100"
            />
            <LinkButton
              linkText="[rules]"
              url="/rules"
              className="decoration-white/0 hover:decoration-white/100"
            />
            <LinkButton
              linkText="[leaderboard]"
              url="/leaderboard"
              className="decoration-white/0 hover:decoration-white/100"
            />
          </div>
        </div>
        <div className="right-nav flex items-center gap-4 sm:flex-col lg:flex-row">
          <a className="text-white text-xl">{points} points</a>
          <a className="text-white text-xl">
            [
            {`${String(time.getHours()).padStart(2, "0")}:${String(
              time.getMinutes()
            ).padStart(2, "0")}:${String(time.getSeconds()).padStart(2, "0")}`}
            ]
          </a>
          <button
            className="text-xl text-red underline underline-offset-4 hover:bg-opacity-20
            transition-all ease-in-out duration-300 decoration-red/0
            hover:decoration-red/100"
            onClick={logout}
          >
            [logout]
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
