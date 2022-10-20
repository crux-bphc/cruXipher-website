import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import LinkButton from "./LinkButton";

const Navbar = () => {
  const [points, setPoints] = useState(0);

  return (
    <>
      <nav className="flex justify-between items-center px-6 py-2">
        <div className="left-nav flex items-center gap-8">
          <Link className="font-bold text-3xl" to="/">
            cruXipher
          </Link>
          <LinkButton linkText="about" url="about" />
          <LinkButton linkText="rules" url="rules" />
          <LinkButton linkText="leaderboard" url="leaderboard" />
        </div>
        <div className="right-nav flex items-center gap-4">
          <a className="text-white text-[20px]">{points} points</a>
          <a className="text-white text-[20px]">timer</a>
          <LinkButton linkText="logout" url="#" textColor="text-red" />
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
