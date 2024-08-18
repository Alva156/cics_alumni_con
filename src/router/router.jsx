import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/User/homepage";
import Survey from "../pages/User/Survey";
import User from "../layout/user";
import UserProfile from "../pages/User/UserProfile";
import Threads from "../pages/User/Threads";
import Chatbot from "../pages/User/Chatbot";
import Alumni from "../pages/User/Alumni";


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
        path: "/user-alumni",
        element: <Alumni />,
      },
      {
        path: "/user-chatbot",
        element: <Chatbot />,
      },
      {
        path: "/user-survey",
        element: <Survey />,
      },
      {
        path: "/user-threads",
        element: <Threads />,
      },
      {
        path: "/user-userprofile",
        element: <UserProfile />,
      },
      
      
      
    ],
  },

]);

export default router;
