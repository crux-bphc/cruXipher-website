import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LinkButton from "./LinkButton";

const Navbar = () => {
  const [points, setPoints] = useState(0);
  const navigate = useNavigate();

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
          <a className="text-white text-xl">[02:00:00]</a>
          <button
            className="text-xl text-red underline underline-offset-4 hover:bg-opacity-20
            transition-all ease-in-out duration-300 decoration-red/0
            hover:decoration-red/100"
            onClick={() => {
              sessionStorage.clear();
              navigate("/login");
            }}
          >
            [logout]
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
