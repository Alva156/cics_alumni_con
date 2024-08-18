import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/User/homepage";
import Survey from "../pages/User/Survey";
import User from "../layout/user";
import UserProfile from "../pages/User/UserProfile";
import Threads from "../pages/User/Threads";
import Chatbot from "../pages/User/Chatbot";
import Alumni from "../pages/User/Alumni";
import Certifications from "../pages/User/Contents/Certifications";
import Companies from "../pages/User/Contents/Companies";
import DocumentRequest from "../pages/User/Contents/DocumentRequest";
import Events from "../pages/User/Contents/Events";
import News from "../pages/User/Contents/News";
import Job from "../pages/User/Contents/Job";


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
      {
        path: "/user-certifications",
        element: <Certifications />,
      },
      {
        path: "/user-companies",
        element: <Companies />,
      },
      {
        path: "/user-documentrequest",
        element: <DocumentRequest />,
      },
      {
        path: "/user-events",
        element: <Events />,
      },
      {
        path: "/user-job",
        element: <Job />,
      },
      {
        path: "/user-news",
        element: <News />,
      },

      
      
      
    ],
  },

]);

export default router;
