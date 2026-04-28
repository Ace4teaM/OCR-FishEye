"use client"

import { createContext, useState, useMemo } from 'react';

export const StatesContext = createContext();

export function StatesProvider({ children }) {
  const [currentModal, setCurrentModal] = useState(""); // "" = fermé, "contact" = dialog de contact ouvert, ...

  const showContactModal = () => {
    setCurrentModal("contact");
  };

  const hideModal = () => {
    setCurrentModal("");
  };

  const contextPayload = { showContactModal, hideModal, currentModal };

  return (
    <StatesContext.Provider value={contextPayload}>
      {children}
    </StatesContext.Provider>
  );
}