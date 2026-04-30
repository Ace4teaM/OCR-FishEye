"use client"

import { createContext, useState, useMemo } from 'react';
import ContactFormModal from "@/components/ContactFormModal/ContactFormModal.jsx";
import MediaCarrouselModal from "@/components/MediaCarrouselModal/MediaCarrouselModal.jsx";

export const StatesContext = createContext();

export function StatesProvider({ children }) {
  const [currentModal, setCurrentModal] = useState(""); // "" = fermé, "contact" = dialog de contact ouvert, ...

  const [sortMode, setSortMode] = useState();

  const [modalProps, setModalProps] = useState({});

  const showContactModal = (props) => {
    setCurrentModal("contact");
    setModalProps(props);
  };

  const showCarrouselModal = (props) => {
    setCurrentModal("carrousel");
    setModalProps(props);
  };

  const hideModal = () => {
    setCurrentModal("");
    setModalProps({});
  };

  const contextPayload = { showContactModal, showCarrouselModal, hideModal, currentModal, setCurrentModal, sortMode, setSortMode };

  return (
    <StatesContext.Provider value={contextPayload}>
      {children}
      {
      currentModal == "contact" ?<ContactFormModal {...modalProps}></ContactFormModal>:
      currentModal == "carrousel" ?<MediaCarrouselModal {...modalProps}></MediaCarrouselModal>:
      <></>
      }
    </StatesContext.Provider>
  );
}