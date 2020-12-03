import React, { createContext, useState } from "react";

export const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [uid, setUID] = useState("");
  const [logged, setLogged] = useState(false);


  return (
    <UserContext.Provider
      value={{
        name,
        email,
        uid,
        logged,
        setName,
        setEmail,
        setUID,
        setLogged
      }}
    >
      {children}
    </UserContext.Provider>
  );
};