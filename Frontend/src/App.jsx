import "./App.css";
import Body from "./components/Body.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header.jsx";
import Plans from "./components/Plans.jsx";
import Blogs from "./components/Blogs.jsx";
import PlanDetails from "./components/PlanDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/header",
    element: <Header />,
  },
  {
    path: "/plans",
    element: <Plans />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/plans/:id",
    element: <PlanDetails />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
