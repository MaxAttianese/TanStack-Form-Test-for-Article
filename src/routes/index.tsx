import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { Homepage } from "../pages/homepage";
import { BasicForm } from "../pages/basic-form";
import { AdvancedForm } from "../pages/advanced-form";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "basic-form",
        element: <BasicForm />,
      },
      {
        path: "advanced-form",
        element: <AdvancedForm />,
      },
    ],
  },
]);
