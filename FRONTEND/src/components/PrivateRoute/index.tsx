import CircularProgress from "@mui/material/CircularProgress";
import { ROUTES } from "../../constants/routes";
import { useSession } from "../../context/session.context";
import Layout from "../Layout";
import { Navigate, Outlet } from "react-router-dom";
import { ROLES } from "../../utils/roles";

const PrivateRoute = () => {
  const { user, isLoading } = useSession();
  console.log("🚀 ~ file: index.tsx:10 ~ PrivateRoute ~ user:", user);

  return isLoading ? (
    <CircularProgress />
  ) : user && (user.role === ROLES.USER || user.role === ROLES.ADMIN) ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to={ROUTES.LOGIN} />
  );
};

export default PrivateRoute;
