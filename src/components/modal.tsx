import React, { useEffect, useState } from "react";
import "./modal.css";

function Modal({
    title = "Titre",
    description = "Description",
    imagelink = {}, /* On s'attend à une liste d'image */
    tags = {},
    redirection_link = "",
    borderColor= "",
    backgroundcolor = "",
    modalState = true,
    toggleModal = undefined, /* Contiendra la fonction qui déclenche l'affichage de la popup*/
}) {
    const [modal, setModal] = useState(false);
    useEffect(() => {
        setModal(modalState);
    }, [modalState]);

    useEffect(() => {
        if (modal) {
            document.body.classList.add('active-modal');
        } else {
            document.body.classList.remove('active-modal');
        }
    }, [modal]);

    return (
        <>
            <div className="modal" style={{
                '--modal-background-color': backgroundcolor,
                '--modal-border-color': borderColor
            } as React.CSSProperties }>
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <button className="close-modal" onClick={toggleModal} style={{
                        '--button-border-color': backgroundcolor
                    } as React.CSSProperties}>
                        CLOSE
                    </button>
                </div>
            </div>
        </>
    );
}

export default Modal;