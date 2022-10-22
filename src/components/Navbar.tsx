import { useState } from "react";
import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";

const Navbar = () => {
  const [points, setPoints] = useState(0);

  return (
    <>
      <nav className="flex justify-between items-center px-6 py-2">
        <div className="left-nav flex items-center gap-8">
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
        <div className="right-nav flex items-center gap-4">
          <a className="text-white text-xl">{points} points</a>
          <a className="text-white text-xl">[02:00:00]</a>
          <LinkButton
            linkText="[logout]"
            url="#"
            textColor="text-red"
            className="decoration-red/0 hover:decoration-red/100"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
