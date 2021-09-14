import React from "react";
import HomeStack from "./homeStack.routes";

import { NavigationContainer } from "@react-navigation/native";
import { GlobalProvider } from "../context/globalContext";

const Routes: React.FC = () => (
  <NavigationContainer>
    <GlobalProvider>
      <HomeStack />
    </GlobalProvider>
  </NavigationContainer>
);

export default Routes;
