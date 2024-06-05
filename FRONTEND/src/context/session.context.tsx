/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React, {
  FC,
  createContext,
  useState,
  useContext,
  useMemo,
  useEffect,
} from "react";
import { SessionContextType, UserType } from "../utils/types";
import { AuthService } from "../services/auth.service";

type SessionProviderProps = {
  children: React.ReactNode;
};

const SessionContext = createContext<SessionContextType>({
  user: undefined,
  setUser: null,
  isLoading: false,
});

export const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserType>();
  const [isLoading, setIsLoading] = useState(true);

  const value = useMemo(
    () => ({
      user,
      setUser,
      isLoading,
    }),
    [user, isLoading],
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      AuthService.getUser(token)
        .then((result) => {
          setUser(result?.data?.user);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
