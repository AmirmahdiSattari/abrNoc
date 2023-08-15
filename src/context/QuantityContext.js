import React, { createContext, useContext, useState } from 'react';

const QuantityContext = createContext();

export const useQuantityContext = () => useContext(QuantityContext);

export const QuantityProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <QuantityContext.Provider
      value={{ quantity, incrementQuantity, decrementQuantity }}
    >
      {children}
    </QuantityContext.Provider>
  );
};
