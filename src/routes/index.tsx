import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./homeStack.routes";

import { RequestStorage } from "../context/httpContext";

const Routes: React.FC = () => (
  <NavigationContainer>
    <RequestStorage>
      <HomeStack />
    </RequestStorage>
  </NavigationContainer>
);

export default Routes;
