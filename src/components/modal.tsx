import React, { useEffect, useState } from "react";
import "./modal.css";
import Carousel from "./carousel";
import Tags from "./tags";

function Modal({
    title = "Titre",
    description = "Description",
    imagelink = [], /* On s'attend à une liste d'image */
    tags = [],
    redirection_link = "",
    borderColor= "",
    backgroundcolor = "",
    modalState = true,
    toggleModal = undefined, /* Contiendra la fonction qui déclenche l'affichage de la popup*/
    toggleOverallModal= undefined
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
                <div onClick={() => {
                    toggleModal();
                    toggleOverallModal();
                }} className="overlay"></div>
                <div className="modal-content">
                    <div className="modal-real-content">
                        {imagelink && <Carousel imagesLinks={imagelink}></Carousel>}
                        <div className="modal-description">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            {tags && <Tags tags={tags}></Tags>}
                        </div>
                    </div>
                    <button className="close-modal" onClick={() => {toggleModal(); toggleOverallModal()}} style={{
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