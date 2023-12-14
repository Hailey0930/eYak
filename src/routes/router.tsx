import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Layout from "../components/layout";

<<<<<<< HEAD
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
=======
export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Main />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};
>>>>>>> develop
