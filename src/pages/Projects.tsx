import { useEffect, useRef, useState } from "react";
import Card from "../components/card";
import "./projects.css";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";

function Projects() {
    const [alreadyLoaded, setAlreadyLoaded] = useState(false);
    const itemBackgroundColor = "255, 0, 0";
    const itemBorderColor = "255, 200, 200";

    const [overallModal, setOverallModal] = useState(false);
    const toggleOverallModal = () => {
        setOverallModal(!overallModal);
    }

    const projectSceneRef = useRef(null);
    useEffect(() => {
        if (!alreadyLoaded) { //Si la page n'a pas déjà été chargée pour la première fois
            gsap.fromTo(
                projectSceneRef.current,
                { x: '100%' }, //Position de départ
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
        <div className="project-page" style={{'--page-background-color': itemBackgroundColor} as React.CSSProperties}>
            <div className="project-list">
                <Card
                    title="PROJETS"
                    description={[
                        "Présentation sous forme d'une liste des projets sur lesquelles j'ai pu travailler. Les tags vous permettent de savoir les outils qui ont été utilisés pour la réalisation de ceux ci",
                        "Certains projets auront des liens de redirection comme ici. Celui ci redirige vers la page d'accueil."]}
                    popup={true}
                    redirection_link_description="Page d'accueil"
                    redirection_link="/#/"
                    backgroundcolor={"100,25,25"}
                    bordercolor={"200,100,100"}
                    overallModalState={overallModal}
                    toggleOverallModal={toggleOverallModal}
                ></Card>
                <Card
                    title="zratex.github.io"
                    description={["Projet de site web qui a pour but d'être à la fois un portfolio de mes projets informatiques et graphiques, me donner de l'expérience avec un projet web concrès, mais aussi avoir une véritable utilité pour certains utilisateur au travers des pages /veronica et /gamemode",
                        "Ce projet a été réalisé en React, déployé grâce à Github Pages, et toutes les images sont stockées sur un dépôt Github à part.",
                        "Les modèles et animations des personnages sont extraits de Super Smash Bros. Ultimate (2018 Nintendo, Sora | Bandai Namco) depuis Blender, pour être importé sur le site grâce à Spline. De ce fait, les modèles et animations des personnages ne sont pas ma propriété intellectuelle.",
                        "Ce lien vous redirigera vers le dépôt Github de ce site web."
                    ]}
                    redirection_link_description="Dépôt Github de ce site web"
                    redirection_link="https://github.com/Zratex/Zratex.github.io"
                    backgroundcolor={itemBackgroundColor}
                    bordercolor={itemBorderColor}
                    tags={["React", "Javascript", "HTML", "CSS", "Github", "Spline", "Blender"]}
                    popup={true}
                    overallModalState={overallModal}
                    toggleOverallModal={toggleOverallModal}
                ></Card>
                <Card
                    title="[TBG] The Battle Ground"
                    description={["'The Battle Ground' est une association de jeux de combats qui a pour but de fédérer une véritable communauté à l'échelle de la ville de Reims. Association que j'ai fondée tout début 2024 et dont j'en suis au moment où j'écrit cette page encore président.",
                        "Notre principale de tournois se nomme 'Underground Arena', qui est une série de tournois inspiré de la direction artistiques des jeux 'Street Fighter' (majoritairement du troisième opus).",
                        "Pour plus d'informations, veuillez plutôt regarder la page de galleries avec un titre commençant par '[TBG]'. Ce bouton ci dessous vous redirigera vers mes réalisations en tant que graphiste."
                    ]}
                    imagelink={["https://raw.githubusercontent.com/Zratex/gallery/main/TBG/test%20design.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/New%20generation%20logo%20full%20sandbag.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/UA2nd%20logo.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/TBG%20presentation.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Evolution%20TBG.PNG",
                    ]}
                    redirection_link_description="Gallery de ce site"
                    redirection_link="/#/gallery"
                    backgroundcolor={itemBackgroundColor}
                    bordercolor={itemBorderColor}
                    tags={["Association", "Evénementiel", "Blender", "Paint.net", "Premiere Pro"]}
                    popup={true}
                    overallModalState={overallModal}
                    toggleOverallModal={toggleOverallModal}
                ></Card>
                <Card
                    title="Véronica"
                    description={["Bot en Discord.py encore en Alpha, adapté pour le serveur Discord BDN avec Sqlite comme BD, actuellement en refonte complète prévoyant une API sous API Platform avec PostgreSQL comme BD. C'est le plus gros projet que j'ai envisagé de ma carrière.",
                        "L'idée de l'API au delà de l'entrainement est de fournir dans le futur la capacité de traiter les données pour en faire des pages utiles mais aussi de statistiques, d'où le pourquoi il existe une page dédiée (le bouton de redirection redirige vers cette page).",
                        "L'API sera publique, ce qu'il fait que n'importe qui peut l'utiliser pour ses besoins."
                    ]}
                    redirection_link_description="Page sur Véronica"
                    redirection_link="/#/veronica"
                    backgroundcolor={itemBackgroundColor}
                    bordercolor={itemBorderColor}
                    tags={["Python", "SQLite", "PostgreSQL", "API Platform", "Symfony", "PHP"]}
                    popup={true}
                    overallModalState={overallModal}
                    toggleOverallModal={toggleOverallModal}
                ></Card>
                <Card
                    title="Zratey"
                    description={["Au delà de mon pseudo, on peut dire que 'Zratey' est une marque à sa petite échelle : c'est ma chaîne Youtube et Twitch, ainsi que tout ce qui tourne autour de cela. C'est grâce à cette activité que j'ai appris toutes mes connaissances de graphisme/design.",
                        "C'est honnêtement mon activité favorite à produire mais qui est en pause par manque de temps principalement, avant un 2nd Impact.",
                        "Le lien vous redirigera vers ma chaîne Youtube principale. Mon pseudo est exactement le même sur Twitch. 'Zratey C2' est ma chaîne Youtube secondaire où j'y fourre un peu tout."
                    ]}
                    imagelink={[
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Images/profile.png"
                    ]}
                    redirection_link_description="Chaîne YT principale"
                    redirection_link="https://www.youtube.com/@Zratey"
                    backgroundcolor={itemBackgroundColor}
                    bordercolor={itemBorderColor}
                    tags={["Youtube", "Twitch", "Premiere Pro", "Blender", "OBS"]}
                    popup={true}
                    overallModalState={overallModal}
                    toggleOverallModal={toggleOverallModal}
                ></Card>
                <Card
                    title="Bol de Nouilles"
                    description={["Serveur Discord communautaire de 'Zratey'. Je le met comme projet à part, car c'est une véritable entité à part avec une communauté très vivante via par exemples des événements, au delà de sa liaison avec la chaîne Youtube/Twitch.",
                        "Le lien de redirection est le lien d'invitation pour rejoindre ce serveur Discord."
                    ]}
                    imagelink={[
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Images/Bol%20ligue.png"
                    ]}
                    redirection_link_description="Lien d'invitation vers le serveur Discord"
                    redirection_link="https://discord.gg/s6dGnVH"
                    backgroundcolor={itemBackgroundColor}
                    bordercolor={itemBorderColor}
                    tags={["Discord", "Communauté", "Evénementiel"]}
                    popup={true}
                    overallModalState={overallModal}
                    toggleOverallModal={toggleOverallModal}
                ></Card>
                <Card
                    title="Recettes de Bob"
                    description={["Projet de groupe fait en cours où l'objectif était de réaliser un site de cuisine similaire à Marmiton.",
                        "D'abbord designé sur Figma, le projet avait était en premier lieu été réalisé avec Symfony pour le back-end et Twig pour le front-end, il a ensuite été développé en Symfony/API Platform pour le back-end, et React pour le front-end.",
                        "Malheureusement à cause des serveurs de l'IUT en maintenance, aucune démonstrations n'est disponible. Donc voici une image tiré du Figma pour le projet, et le lien redirige vers une vidéo de présentation postée sur ma chaîne secondaire d'une fonctionnalité du site."
                    ]}
                    imagelink={[
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Recettes%20de%20Bob/Figma.PNG"
                    ]}
                    redirection_link_description="Vidéo de présentation"
                    redirection_link="https://youtu.be/dN0Ub43RdSg"
                    backgroundcolor={itemBackgroundColor}
                    bordercolor={itemBorderColor}
                    tags={["Symfony", "Twig", "API Platform", "React", "Figma"]}
                    popup={true}
                    overallModalState={overallModal}
                    toggleOverallModal={toggleOverallModal}
                ></Card>
                <Card
                    title="binaryTree Cpp"
                    description={["Projet réalisé dans le cadre des cours où l'on devait programmer une calculatrice en C++ avec comme entrée un simple prompt, mais j'ai décidé de l'implémenter avec un arbre binaire.",
                    ]}
                    redirection_link_description="Dépôt Github du projet"
                    redirection_link="https://github.com/Zratex/binaryTreeCpp"
                    backgroundcolor={itemBackgroundColor}
                    bordercolor={itemBorderColor}
                    tags={["C++"]}
                    popup={true}
                    overallModalState={overallModal}
                    toggleOverallModal={toggleOverallModal}
                ></Card>
                <Card
                    title="Rock Paper Scissors"
                    description={[
                        "Ma première utilisation sérieuse de Javascript. Projet fait lors de nos premiers cours de HTML, CSS et Js pendant le BUT Informatique. Il ne faut pas s'attarder au design du site qui n'est pas très beau, mais surtout aux fonctionnalités logiques derrière. En effet, en plus d'un simple RPS contre une sélection aléatoire, une musique a été implémentée pour s'adapter en fonction de l'état de la partie ('Not a Little Girl (Chun-Li's theme) - Street Fighter VI'). A noter que :",
                        "- La musique se lance une fois que la première sélection a été réalisée, c'est dû à une limitation des navigateurs qui empêchent de jouer des sons si ils n'ont pas été délibérément choisis par l'utilisateur",
                        "- Une fois la partie terminée, le bouton 'GAME SET' semble relancer une partie, alors que ça soft lock juste le jeu. Pour refaire une partie, il faut recharger la page"]}
                    imagelink={[
                        "https://raw.githubusercontent.com/Zratex/gallery/main/rps/RPS.png",
                    ]}
                    redirection_link_description="Démonstration"
                    redirection_link="/rps.html"
                    backgroundcolor={itemBackgroundColor}
                    bordercolor={itemBorderColor}
                    tags={["HTML", "CSS", "Javascript"]}
                    popup={true}
                    overallModalState={overallModal}
                    toggleOverallModal={toggleOverallModal}
                ></Card>
                <Card
                    title="Login Sport"
                    description={["Ma première utilisation de Figma, basé sur un modèle déjà existant. Page de login en HTML CSS Js qui a été réalisée dans le cadre d'un cours de gestion de projets pour une entreprise de sport. Le rendu prévu sur Figma n'a pas eut le temps d'être finalisé.",
                        "A noter que la page n'est pas responsive, tout du moins elle a pas mal de bugs d'affichages à cause de la résolution. L'idéal est de regarder depuis un écran d'une résolution 1080p"
                    ]}
                    imagelink={[
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Login%20Sport/resultat.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Login%20Sport/light%20login.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Login%20Sport/dark%20login.png",
                    ]}
                    redirection_link_description="Démonstration"
                    redirection_link="/login-sport.html"
                    backgroundcolor={itemBackgroundColor}
                    bordercolor={itemBorderColor}
                    tags={["Figma", "HTML", "CSS"]}
                    popup={true}
                    overallModalState={overallModal}
                    toggleOverallModal={toggleOverallModal}
                ></Card>
            </div>
            <div className="project-scene" ref={projectSceneRef}>
                <Spline scene="https://prod.spline.design/Nud-NrJGeZvne7Wh/scene.splinecode"></Spline>
            </div>
        </div>
    );
}

export default Projects;