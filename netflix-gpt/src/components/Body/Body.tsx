import Login from "../Login/Login";
import { createBrowserRouter } from "react-router-dom";
import Browse from "../Browse/Browse";
import {RouterProvider} from "react-router-dom";

const Body = () => {
     const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;