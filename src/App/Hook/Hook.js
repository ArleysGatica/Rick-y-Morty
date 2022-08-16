import { useState } from "react";

export const useModal = (initialVaue = false) => {
  const [isOpen, setIsOpen] = useState(initialVaue);
  const OpenModal = () => setIsOpen(true);
  const CloseModal = () => setIsOpen(false);
  return [isOpen, OpenModal, CloseModal];
};
