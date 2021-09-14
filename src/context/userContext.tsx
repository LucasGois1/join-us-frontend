import React, { createContext, useState } from "react";

export const UserContext = createContext<any>(null);

export const UserProvider: React.FC = ({ children }) => {
  const [userEmail, setUserEmail] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [userToken, setUserToken] = useState<string>('');

  return (
    <UserContext.Provider value={{
      userEmail,
      setUserEmail,
      userName,
      setUserName,
      userToken,
      setUserToken,
    }}>
      {children}
    </UserContext.Provider>
  );
};