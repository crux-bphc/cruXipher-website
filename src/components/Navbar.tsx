import { useState } from "react";
import LinkButton from "./LinkButton";

const Navbar = () => {
  const [points, setPoints] = useState(0);

  return (
    <nav className="flex justify-between items-center px-6 py-2">
      <div className="left-nav flex items-center gap-8">
        <h2 className="font-bold text-3xl">cruXipher</h2>
        <LinkButton linkText="about" url="#" />
        <LinkButton linkText="rules" url="#" />
        <LinkButton linkText="leaderboard" url="#" />
      </div>
      <div className="right-nav flex items-center gap-4">
        <a className="text-white text-[20px]">{points} points</a>
        <a className="text-white text-[20px]">timer</a>
        <LinkButton linkText="logout" url="#" textColor="text-red" />
      </div>
    </nav>
  );
};

export default Navbar;
