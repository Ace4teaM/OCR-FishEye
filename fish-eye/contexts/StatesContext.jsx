"use client"

import { createContext, useState, useMemo } from 'react';
import FormModal from "@/components/FormModal/FormModal.jsx";
import MediaCarrouselModal from "@/components/MediaCarrouselModal/MediaCarrouselModal.jsx";

export const StatesContext = createContext();

export function StatesProvider({ children }) {
  const [currentModal, setCurrentModal] = useState(""); // "" = fermé, "contact" = dialog de contact ouvert, ...

  const [modalProps, setModalProps] = useState({});

  const showContactModal = (props) => {
    console.log("showContactModal", props);
    setCurrentModal("contact");
    setModalProps(props);
  };

  const showCarrouselModal = (props) => {
    console.log("showCarrouselModal", props);
    setCurrentModal("carrousel");
    setModalProps(props);
  };

  const hideModal = () => {
    setCurrentModal("");
    setModalProps({});
  };

  const contextPayload = { showContactModal, showCarrouselModal, hideModal, currentModal };

  return (
    <StatesContext.Provider value={contextPayload}>
      {children}
      {
      currentModal == "contact" ?<FormModal {...modalProps}></FormModal>:
      currentModal == "carrousel" ?<MediaCarrouselModal {...modalProps}></MediaCarrouselModal>:
      <></>
      }
    </StatesContext.Provider>
  );
}