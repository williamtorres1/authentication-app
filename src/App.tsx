import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';
import AuthContext from './contexts/auth';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthContext.Provider value={{signed: false}}>
        {/* Passar para todas as rotas o contexto */}
        <Routes />
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

export default App;
