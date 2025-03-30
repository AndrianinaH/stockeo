import { useSnackbar } from "../context/snackbar.context";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";

export const useApiError = () => {
  const { handleSetSnackbar } = useSnackbar();
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleApiError = (error: any, customMessage?: string) => {
    console.error(error);

    if (error?.response?.status === 401) {
      // Redirect to login page
      navigate(ROUTES.LOGIN);
      localStorage.removeItem("token");
      handleSetSnackbar({
        isOpen: true,
        message: "Session expired, please login again.",
        variant: "error",
      });
    } else {
      handleSetSnackbar({
        isOpen: true,
        message:
          error?.response?.data || customMessage || "An error encountered",
        variant: "error",
      });
    }
  };

  return { handleApiError };
};
