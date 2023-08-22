import {
  FC,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import PropTypes from "prop-types";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { SnackbarContextType } from "../utils/types";

type SnackbarProviderProps = {
  children: React.ReactNode;
};

type SnackbarType = {
  isOpen: boolean;
  message: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variant: any;
};

const SnackbarContext = createContext<SnackbarContextType>(
  {} as SnackbarContextType,
);

export const SnackbarProvider: FC<SnackbarProviderProps> = ({ children }) => {
  const [snackbarState, setSnackbarState] = useState<SnackbarType>({
    isOpen: false,
    message: "",
    variant: "success",
  });

  const handleClose = () => {
    setSnackbarState({ ...snackbarState, isOpen: false });
  };

  const handleSetSnackbar = useCallback(
    (value: {
      isOpen: boolean;
      message: string;
      variant: "success" | "error";
    }) => {
      setSnackbarState(value);
    },
    [],
  );

  const value = useMemo(
    () => ({
      handleSetSnackbar,
    }),
    [],
  );

  return (
    <SnackbarContext.Provider value={value}>
      {children}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={snackbarState.isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={snackbarState.variant}>
          {snackbarState.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

SnackbarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useSnackbar = () => useContext(SnackbarContext);
