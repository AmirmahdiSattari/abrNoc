import React, { createContext, useContext, useState } from 'react';

const updateComponents = createContext();

export const useUpdateContext = () => useContext(updateComponents);

export const UpdateProvider = ({ children }) => {
  const [update, setUpdate] = useState(false);

  return (
    <updateComponents.Provider value={{update, setUpdate }}>
      {children}
    </updateComponents.Provider>
  );
};
