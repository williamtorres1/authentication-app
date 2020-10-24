import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth';
import api from '../services/api';
import Axios from 'axios';

interface User {
  name: string;
  email: string;
}
interface AuthContextDTO {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(): Promise<void>;
  signUp(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextDTO>({} as AuthContextDTO);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storagedUser && storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

        setUser(JSON.parse(storagedUser));
      }
      setLoading(false);
    }
    loadStoragedData();
  }, []);

  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);
    api.defaults.headers.Authorization = `Bearer ${response.token}`;

    await AsyncStorage.multiSet([
      ['@RNAuth:user', JSON.stringify(response.user)],
      ['@RNAuth:token', response.token],
    ]);
  }

  async function signUp() {
    const response = await Axios.get(
      'http://api.github.com/users/williamtorres1',
    );
    console.log(response);
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, loading, signIn, signUp, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
