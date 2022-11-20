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
import { useBeforeunload } from "react-beforeunload";
import { useGlobalContext } from "./context/globalContext";
import { IconX } from "@tabler/icons";

const App = () => {
  const { globalDispatch } = useGlobalContext();
  useBeforeunload(async () => {
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
  });
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
};

export default App;
