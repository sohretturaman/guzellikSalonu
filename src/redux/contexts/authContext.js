/** @format */

import { createContext, useState } from "react";

export const authUserContext = createContext({
  user: null,
  isAdmin: false,
  addSavedUser: () => {},
});

const SavedUserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  function addSavedUser(userInfo) {
    setUser(userInfo);
    setIsAdmin(userInfo.isAdmin || false);
  }

  const myValue = {
    user: user,
    isAdmin: isAdmin,
    addSavedUser: addSavedUser,
  };

  return (
    <authUserContext.Provider value={myValue}>
      {children}
    </authUserContext.Provider>
  );
};

export default SavedUserContextProvider;
