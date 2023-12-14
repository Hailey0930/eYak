import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Layout from "../components/layout";

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
