import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import PrivateRoute from "./components/PrivateRoute";
import ConnectionRoute from "./components/ConnectionRoute";
import AdminRoute from "./components/AdminRoute";
import Login from "./pages/Connection/Login";
import StockPage from "./pages/Stock";
import SalesPage from "./pages/Sales";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ConnectionRoute />}>
          <Route path={ROUTES.LOGIN} element={<Login />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path={ROUTES.ROOT} element={<StockPage />} />
          <Route path={ROUTES.SALES} element={<SalesPage />} />
        </Route>
        <Route element={<AdminRoute />}>
          <Route path={ROUTES.DASHBOARD} element={<h1>Dashboard</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
