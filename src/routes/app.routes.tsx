import React from 'react';
import Dashboard from '../pages/Dashboard';

import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Navigator>
    <Screen name="Dashboard" component={Dashboard} />
  </Navigator>
);

export default AppRoutes;
