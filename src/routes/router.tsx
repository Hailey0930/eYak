import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Layout from "../components/layout";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Layout>
          <Main />
        </Layout>
      ),
    },
  ],
  { basename: process.env.REACT_APP_BASE_URL },
);