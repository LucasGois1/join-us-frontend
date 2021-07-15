import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OnBording from '../pages/OnBoarding';
import CreateAccount from '../pages/CreateAccount';

const StackRoutes = createStackNavigator();

const AppRoutes : React.FC = () => (
    <StackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: '#FFFF'
            }
        }}
    >

        <StackRoutes.Screen 
            name="OnBoarding"
            component={OnBording}
        />
        <StackRoutes.Screen 
            name="CreateAccount"
            component={CreateAccount}
        />

    </StackRoutes.Navigator>
);

export default AppRoutes;