import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { Homepage } from "../pages/homepage";
import { BasicForm } from "../pages/basicForm";
import { AdvancedForm } from "../pages/advancedForm";

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
