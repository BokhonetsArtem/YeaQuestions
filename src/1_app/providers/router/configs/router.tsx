import BaseLayout from "@/1_app/layouts/BaseLayout";
import { MainPage } from "@/2_pages/MainPage";
import { NotFound } from "@/2_pages/NotFound";
import { QuestionDetails } from "@/2_pages/QuestionDetails";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
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
