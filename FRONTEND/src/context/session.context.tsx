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
import { ROLES } from "../utils/roles";
// import { getUser } from "../services/user.service";

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
    if (localStorage.getItem("token")) {
      // getUser(localStorage.get("token") || "")
      //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
      //   .then((result: any) => {
      //     setUser(result?.data?.data);
      //   })
      //   .finally(() => {
      //     setIsLoading(false);
      //   });
      const fakeUser: UserType = {
        id: 1,
        isActive: true,
        role: ROLES.ADMIN,
        userName: "admin",
      };
      setUser(fakeUser);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
