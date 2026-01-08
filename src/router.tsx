import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainPage from "./pages/MainPage/MainPage";
import NotFound from "./pages/NotFound/NotFound";
import QuestionDetails from "./pages/QuestionDetails/QuestionDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/details/:id",
        element: <QuestionDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
