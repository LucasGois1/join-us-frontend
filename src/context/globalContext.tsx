import React from "react";
import { RequestStorage } from "./httpContext";
import { UserProvider } from "./userContext";

export const GlobalProvider: React.FC = ({ children }) => {

  return (
    <UserProvider>
        <RequestStorage>
            {children}
        </RequestStorage>
    </UserProvider>
  );
};
