import { useState } from "react";
import Card from "../components/card";
import "./projects.css";

function Projects() {
    const itemBackgroundColor = "255, 0, 0";
    const itemBorderColor = "255, 200, 200";

    const [overallModal, setOverallModal] = useState(false);
    const toggleOverallModal = () => {
        setOverallModal(!overallModal);
    }

    return (
        <div className="project-list">
            <Card
                title="Rock Paper Scissors"
                description="Ma première utilisation sérieuse de Javascript. Projet fait lors de nos premiers cours de HTML, CSS et Js pendant le BUT Informatique. Il ne faut pas s'attarder au design du site qui n'est pas très beau, mais surtout aux fonctionnalités logiques derrière. En effet, en plus d'un simple RPS contre une sélection aléatoire, une musique a été implémentée pour s'adapter en fonction de l'état de la partie ('Not a Little Girl (Chun-Li's theme) - Street Fighter VI'). A noter que :
                - La musique se lance une fois que la première sélection a été réalisée, c'est dû à une limitation des navigateurs qui empêchent de jouer des sons si ils n'ont pas été délibérément choisis par l'utilisateur
                - Une fois la partie terminée, le bouton 'GAME SET' semble relancer une partie, alors que ça soft lock juste le jeu. Pour refaire une partie, il faut recharger la page"
                imagelink={[
                    "https://raw.githubusercontent.com/Zratex/gallery/main/Images/RPS.png",
                ]}
                redirection_link=""
                backgroundcolor={itemBackgroundColor}
                bordercolor={itemBorderColor}
                tags={["HTML", "CSS", "Javascript"]}
                popup={true}
                overallModalState={overallModal}
                toggleOverallModal={toggleOverallModal}
            ></Card>
            <Card
                title="Login Sport"
                description="Ma première utilisation de Figma, basé sur un modèle déjà existant. Page de login en HTML CSS Js qui a été réalisé dans le cadre d'un cours de gestion de projets pour une entreprise de sport. Le rendu prévu sur Figma n'a pas eut le temps d'être finalisé. A noter que la page n'est pas responsive, tout du moins elle a pas mal de bugs d'affichages à cause de la résolution. L'idéal est de regarder depuis un écran d'une résolution 1080p"
                imagelink={[
                    "https://raw.githubusercontent.com/Zratex/gallery/main/Login%20Sport/resultat.png",
                    "https://raw.githubusercontent.com/Zratex/gallery/main/Login%20Sport/light%20login.png",
                    "https://raw.githubusercontent.com/Zratex/gallery/main/Login%20Sport/dark%20login.png",
                ]}
                redirection_link=""
                backgroundcolor={itemBackgroundColor}
                bordercolor={itemBorderColor}
                tags={["Figma", "HTML", "CSS"]}
                popup={true}
                overallModalState={overallModal}
                toggleOverallModal={toggleOverallModal}
            ></Card>
        </div>
    );
}

export default Projects;