import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import OnBording from "../pages/OnBoarding";
import CreateAccount from "../pages/CreateAccount";
import Login from "../pages/Login";
import Home from "../pages/Home";

const StackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <StackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: "#FFFF",
      },
    }}
  >
    <StackRoutes.Screen name="OnBoarding" component={OnBording} />
    <StackRoutes.Screen name="CreateAccount" component={CreateAccount} />
    <StackRoutes.Screen name="Login" component={Login} />
    <StackRoutes.Screen name="Home" component={Home} />
  </StackRoutes.Navigator>
);

export default AppRoutes;
