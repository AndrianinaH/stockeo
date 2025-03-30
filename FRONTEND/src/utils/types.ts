import { ROLES } from "./roles";

export type SnackbarContextType = {
  handleSetSnackbar: (value: {
    isOpen: boolean;
    message: string;
    variant: "success" | "error";
  }) => void | undefined;
};

export type SessionContextType = {
  user: UserType | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUser: any | null;
  isLoading: boolean;
};

export type UserType = {
  email: string;
  role: ROLES;
};
