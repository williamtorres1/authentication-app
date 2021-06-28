import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CodePush from 'react-native-code-push';
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

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  installMode: CodePush.InstallMode.IMMEDIATE,
})(App);
