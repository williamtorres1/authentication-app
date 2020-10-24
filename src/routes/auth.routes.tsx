import React from 'react';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Navigator>
    <Screen options={{headerShown: false}} name="SignUp" component={SignUp} />
    <Screen name="SignIn" component={SignIn} />
  </Navigator>
);

export default AuthRoutes;
