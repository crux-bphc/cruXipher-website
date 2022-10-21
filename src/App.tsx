import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import PageLayout from "./components/PageLayout";
import "./index.css";
import QuestionLoader from "./loaders/QuestionLoader";
import { MainApp, About, Rules, LeaderBoard } from "./pages";
import QuestionPage from "./pages/QuestionPage";

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <>
            <Route path="/" element={<PageLayout />}>
              <Route index element={<MainApp />} />
              <Route path="/about" element={<About />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/leaderboard" element={<LeaderBoard />} />
            </Route>
            <Route path="/question" element={<PageLayout />}>
              <Route
                path=":slug"
                loader={QuestionLoader}
                element={<QuestionPage />}
              />
            </Route>
          </>
        )
      )}
    />
  );
}

export default App;
