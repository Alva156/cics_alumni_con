import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/user/homepage";
import Survey from "../pages/user/Survey";
import Homepage_admin from "../pages/admin/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/pages/user/Survey",
    element: <Survey />,
  },
  {
    path: "../pages/admin/Homepage_admin",
    element: <Homepage_admin />,
  },
]);

export default router;
