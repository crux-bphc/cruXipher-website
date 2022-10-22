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
import { MantineProvider } from "@mantine/core";
import QuestionsProvider from "./providers/QuestionsProvider";

function App() {
  return (
    <MantineProvider
      theme={{
        colorScheme: "dark",
      }}
    >
      <QuestionsProvider>
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
      </QuestionsProvider>
    </MantineProvider>
  );
}

export default App;
