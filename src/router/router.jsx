import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/user/homepage";
import Survey from "../pages/user/Survey";
import HomepageAdmin from "../pages/admin/HomepageAdmin";
import User from "../layout/user";
import UserProfile from "../pages/user/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <User />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/survey",
        element: <Survey />,
      },
      {
        path: "/userprofile",
        element: <UserProfile />,
      },
    ],
  },
]);

export default router;
