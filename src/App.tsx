import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import PageLayout from "./components/PageLayout";
import "./index.css";
import { MainApp, About, Rules, Leaderboard } from "./pages";
import QuestionPage from "./pages/QuestionPage";
import { MantineProvider } from "@mantine/core";
import Login from "./pages/Login";
import { NotificationsProvider } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

function App() {
  return (
    <MantineProvider
      theme={{
        colorScheme: "dark",
      }}
    >
      <ModalsProvider>
        <NotificationsProvider position="top-right">
          <RouterProvider
            router={createBrowserRouter(
              createRoutesFromElements(
                <>
                  <Route path="/" element={<PageLayout />}>
                    <Route index element={<MainApp />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/rules" element={<Rules />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                  </Route>
                  <Route path="/login" element={<Login />} />
                  <Route path="/question" element={<PageLayout />}>
                    <Route path=":slug" element={<QuestionPage />} />
                  </Route>
                </>
              )
            )}
          />
        </NotificationsProvider>
      </ModalsProvider>
    </MantineProvider>
  );
}

export default App;
