import { useEffect, useRef, useState } from "react";
import Card from "../components/card";
import "./gallery.css";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";

function Gallery() {
    const [alreadyLoaded, setAlreadyLoaded] = useState(false);
    const itemBackgroundColor = "255, 255, 0";
    const itemBorderColor = "255, 255, 200";

    const [overallModal, setOverallModal] = useState(false);
    const toggleOverallModal = () => {
        setOverallModal(!overallModal);
    }

    const projectSceneRef = useRef(null);
    useEffect(() => {
        if (!alreadyLoaded) { //Si la page n'a pas déjà été chargée pour la première fois
            gsap.fromTo(
                projectSceneRef.current,
                { x: '500%' }, //Position de départ
                {
                    x: '0%', //Position finale, soit la position qu'il devrait normalement avoir
                    duration: 1,
                    delay: 1 //Commence 1 secondes après le chargement de la page
                }
            );
    
            setAlreadyLoaded(!alreadyLoaded); //On met que la page a déjà été chargée
        }
    })
    return (
        <div className="gallery-page" style={{'--page-background-color': itemBackgroundColor} as React.CSSProperties}>
            <div className="gallery-scene" ref={projectSceneRef}>
                <Spline scene="https://prod.spline.design/3NgbPJKrCg9Qeo9N/scene.splinecode"></Spline>
            </div>
            <div className="gallery-list">
                <Card
                    title="GALLERY"
                    description={[
                        "Collections d'images prises ou faites par moi même que je partage, que ce soit du design, du dessins, de la photo ou autre.",
                        "A noter que certains travaux concernant des projets sont plutôt disponible sur la page des projets. Ce lien vous deririgera vers cette page."]}
                    popup={true}
                    tags={["Cliquez sur l'une des collections pour les révéler"]}
                    redirection_link="/#/projects"
                    backgroundcolor={"100,100,25"}
                    bordercolor={"200,200,100"}
                    overallModalState={overallModal}
                    toggleOverallModal={toggleOverallModal}
                ></Card>
                <Card
                    title="Neon Slide"
                    description={["Rendu d'une scène 3D sous Blender comprenant la map 'Haven' de Valorant (2020 Riot Games), ainsi que du modèle 3D et d'animation de sélection de Neon qui est un personnage tirée du même jeu",
                        "J'ai donc seulement faire le retexturing du personnage, la composition de tout ces éléments, les effets visuels, et le mouvement de camera.",
                        "L'image est un screen de la vidéo mise en lien ci dessous."
                    ]}
                    imagelink={[
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Valorant%20renders/Neon%20slide.png"
                    ]}
                    redirection_link="https://youtu.be/-RrDvKhfXBc"
                    backgroundcolor={itemBackgroundColor}
                    bordercolor={itemBorderColor}
                    tags={["Blender"]}
                    popup={true}
                    overallModalState={overallModal}
                    toggleOverallModal={toggleOverallModal}
                ></Card>
                <Card
                    title="Omen smoke"
                    description={["Rendu d'une scène 3D sous Blender comprenant le modèle 3D et d'animation de sélection de Omen qui est un personnage tirée de Valorant (2020 Riot Games)",
                        "J'ai donc seulement faire le retexturing du personnage, la composition de tout ces éléments, et les effets visuels qui était le objectif de l'exercice. La vidéo comprends les différentes étapes de mes tests.",
                        "L'image est un screen de la vidéo mise en lien ci dessous."
                    ]}
                    imagelink={[
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Valorant%20renders/Omen%20smoke.png"
                    ]}
                    redirection_link="https://youtu.be/3yFrEbPJ5nM"
                    backgroundcolor={itemBackgroundColor}
                    bordercolor={itemBorderColor}
                    tags={["Blender"]}
                    popup={true}
                    overallModalState={overallModal}
                    toggleOverallModal={toggleOverallModal}
                ></Card>
            </div>
        </div>
    );
}

export default Gallery;