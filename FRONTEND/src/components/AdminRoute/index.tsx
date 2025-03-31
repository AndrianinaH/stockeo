import CircularProgress from "@mui/material/CircularProgress";
import { useSession } from "../../context/session.context";
import AdminLayout from "../AdminLayout";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { ROLES } from "../../utils/enum";

const AdminRoute = () => {
  const { user, isLoading } = useSession();

  return isLoading ? (
    <CircularProgress />
  ) : user && user.role === ROLES.ADMIN ? (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  ) : (
    <Navigate to={ROUTES.LOGIN} />
  );
};

export default AdminRoute;
