import { useState, createContext } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

type userContextType = {
  userC: AuthUser | null;
  setUserC: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

// export const UserContext = createContext<userContextType | null>(null);
export const UserContext = createContext({} as userContextType); // no need `if (userContext)` & userContext? ?(X)

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [userC, setUserC] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ userC, setUserC }}>
      {children}
    </UserContext.Provider>
  );
};
