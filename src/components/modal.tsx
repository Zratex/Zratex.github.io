import React, { useEffect, useState } from "react";
import "./modal.css";
import Carousel from "./carousel";
import Tags from "./tags";

interface ModalProps {
    title?: string,
    description?: string[],
    imagelink?: string[], /* On s'attend à une liste d'image */
    tags?: string[],
    redirection_link?: string,
    borderColor?: string,
    backgroundcolor?: string,
    modalState?: boolean,
    toggleModal: () => void,
    toggleOverallModal: () => void;
}

const Modal: React.FC<ModalProps> = ({
    title = "Titre",
    description = ["Description"],
    imagelink = [], /* On s'attend à une liste d'image */
    tags = [],
    redirection_link = "",
    borderColor= "",
    backgroundcolor = "",
    modalState = true,
    toggleModal, /* Contiendra la fonction qui déclenche l'affichage de la popup*/
    toggleOverallModal,
}) => {

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

    const closePopup = () => {
        toggleModal();
        toggleOverallModal();
        document.body.classList.remove('active-modal');
    };

    return (
        <>
            <div className="modal" style={{
                '--modal-background-color': backgroundcolor,
                '--modal-border-color': borderColor
            } as React.CSSProperties }>
                <div onClick={() => {closePopup()}} className="overlay"></div>
                <div className="modal-content">
                    <div className="modal-real-content">
                        {(imagelink.length !=0) && <Carousel imagesLinks={imagelink}></Carousel>}
                        <div className="modal-description">
                            <h1>{title}</h1>
                            <div className="modal-description-text">
                                {description.map((desc, index) => {
                                    return (
                                        <p key={index}>{desc}</p>
                                    );
                                })}
                            </div>
                            {tags && <Tags tags={tags}></Tags>}
                            {redirection_link && <button onClick={() => {window.location.href = redirection_link}} style={{
                                '--button-border-color': borderColor,
                                '--button-background-color': backgroundcolor,
                                '--background-opacity': 0.25
                            } as React.CSSProperties}>Plus d'informations</button>}
                            <button className="close-modal" onClick={() => {closePopup()}} style={{
                                '--button-border-color': backgroundcolor
                            } as React.CSSProperties}>
                                CLOSE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;