
import React from "react";
import "./modal.css";

export const Modal = ({ children, isOpen, CloseModal }) => {
    const handleModalContainerClick = e => e.stopPropagation();
    return (
        <>
            <div className={`modal ${isOpen && "is-open"}`} onClick={CloseModal}>
                <div className="modal__container" onClick={handleModalContainerClick}>
                    <div className="modal-change">
                        <button onClick={CloseModal}>X</button>
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
};