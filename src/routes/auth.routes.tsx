import React from 'react';
import SignIn from '../pages/SignIn';

import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Navigator>
    <Screen name="SignIn" component={SignIn} />
  </Navigator>
);

export default AuthRoutes;
