import { createContext, useContext, useState } from 'react';

const RegionContext = createContext();

export const RegionProvider = ({ children }) => {
  const [selectedRegion, setSelectedRegion] = useState('Germany');

  return (
    <RegionContext.Provider value={{ selectedRegion, setSelectedRegion }}>
      {children}
    </RegionContext.Provider>
  );
};

export const useRegionContext = () => {
  return useContext(RegionContext);
};