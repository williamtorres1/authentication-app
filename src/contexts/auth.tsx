import React, {createContext, useState} from 'react';
import * as auth from '../services/auth';
interface AuthContextDTO {
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextDTO>({} as AuthContextDTO);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<object | null>(null);
  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);
  }
  function signOut() {
    setUser(null);
  }
  return (
    <AuthContext.Provider value={{signed: !!user, user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
