import { createContext, ReactNode, useState } from "react";
import { UserDTO } from "@dtos/UserDTO";
import { api } from "@services/api";

type AuthContextDataProps = {
  user?: UserDTO;
  signIn: (email: string, password: string) => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post("/sessions", {
        email,
        password,
      });

      if (data.user) {
        setUser(data.user);
        console.log("USUÁRIO LOGADO =", data);
      }
    } catch (error) {
      throw error;
    }
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
