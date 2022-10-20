import { Route, Routes, BrowserRouter } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import "./index.css";
import { MainApp, About, Rules, LeaderBoard } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<MainApp />} />
          <Route path="about" element={<About />} />
          <Route path="rules" element={<Rules />} />
          <Route path="leaderboard" element={<LeaderBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
