import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/user/homepage";
import Survey from "../pages/User/Survey";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/pages/user/Survey",
    element: <Survey />,
  },
]);

export default router;
