import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import PrivateRoute from "./components/PrivateRoute";
import ConnectionRoute from "./components/ConnectionRoute";
import AdminRoute from "./components/AdminRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ConnectionRoute />}>
          <Route path={ROUTES.LOGIN} element={<h1>Login</h1>} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path={ROUTES.ROOT} element={<h1>Accueil</h1>} />
        </Route>
        <Route element={<AdminRoute />}>
          <Route path={ROUTES.DASHBOARD} element={<h1>Dashboard</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
