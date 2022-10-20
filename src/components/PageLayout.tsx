import { Outlet } from "react-router-dom";
import BottomBar from "./BottomBar";
import Navbar from "./Navbar";

const PageLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Outlet />
        <BottomBar />
      </div>
    </>
  );
};

export default PageLayout;
