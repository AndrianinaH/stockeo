import CircularProgress from "@mui/material/CircularProgress";
import { useSession } from "../../context/session.context";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const ConnectionRoute = () => {
  const { user, isLoading } = useSession();

  return isLoading ? (
    <CircularProgress />
  ) : !user ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.ROOT} />
  );
};

export default ConnectionRoute;
