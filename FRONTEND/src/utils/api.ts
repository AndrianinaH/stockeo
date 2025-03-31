import { useSnackbar } from "../context/snackbar.context";
import { ROUTES } from "../constants/routes";

export const useApiError = () => {
  const { handleSetSnackbar } = useSnackbar();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleApiError = (error: any, customMessage?: string) => {
    console.error(error);

    if (error?.response?.status === 401) {
      // Redirect to login page
      window.location.href = ROUTES.LOGIN;
      window.location.reload();
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
