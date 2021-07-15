import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './homeStack.routes';

const Routes: React.FC = () => (
    <NavigationContainer>
        <HomeStack />
    </NavigationContainer>
);

export default Routes;