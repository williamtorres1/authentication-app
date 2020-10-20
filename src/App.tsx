import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';
import {AuthProvider} from './contexts/auth';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        {/* Passar para todas as rotas o contexto */}
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
