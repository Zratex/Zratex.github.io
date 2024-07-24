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
                    redirection_link="/#/projects"
                    backgroundcolor={"100,100,25"}
                    bordercolor={"200,200,100"}
                    overallModalState={overallModal}
                    toggleOverallModal={toggleOverallModal}
                ></Card>
                <Card
                    title="Photos"
                    description={["Photos que j'ai prises sans spécialement de contexte depuis mon téléphone."
                    ]}
                    imagelink={["https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Photos/FlowerInChartres.jpg",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Photos/LostAtDamoiselles.jpg",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Photos/Roy%20and%20Chrom.jpg"
                    ]}
                    backgroundcolor={itemBackgroundColor}
                    bordercolor={itemBorderColor}
                    tags={["Photos"]}
                    popup={true}
                    overallModalState={overallModal}
                    toggleOverallModal={toggleOverallModal}
                ></Card>
                <Card
                    title="Dessins"
                    description={["Dessins en tout genre que j'ai pu réalisé par le passé sans spécialement que je vous donne leur contexte. Certaines sont prises en photo avec un téléphone."
                    ]}
                    imagelink={["https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Dessins/Ink.jpg",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Dessins/Dante%20cadr%C3%A9.jpg",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Dessins/Ryu%26Guile.jpg",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Dessins/Venti.jpg",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Dessins/Draw%20Smash%20Broders%20Ultimate%2017.12.2018%20by%20Zratey.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Dessins/Mark%20IV.jpg",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Dessins/Bol%20ligue.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Dessins/Bolo%20logo.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Dessins/test%20dessin%20Viper.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Dessins/Sova.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Dessins/Reaper4Zayonne.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Dessins/Unzer.png",
                    ]}
                    backgroundcolor={itemBackgroundColor}
                    bordercolor={itemBorderColor}
                    tags={["Photos", "Paint.net"]}
                    popup={true}
                    overallModalState={overallModal}
                    toggleOverallModal={toggleOverallModal}
                ></Card>
                <Card
                    title="Affiches"
                    description={["Affiches que j'ai pu réalisées par le passé sans spécialement de contexte."
                    ]}
                    imagelink={["https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Affiches/Affiche%20Tournois%20Smash.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Affiches/Annonce%20live%20birthday%20template.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Affiches/Xandar%20Legion.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Affiches/Xandar%20Arena%201%2008.06.2020.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Affiches/Xandar%20Arena%202%2005.07.2020.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Affiches/Xandar%20Arena%204%2001.11.2020.png",
                    ]}
                    backgroundcolor={itemBackgroundColor}
                    bordercolor={itemBorderColor}
                    tags={["Paint.net","SFM"]}
                    popup={true}
                    overallModalState={overallModal}
                    toggleOverallModal={toggleOverallModal}
                ></Card>
                <Card
                    title="[TBG] Underground Arena: 2nd Impact - Affiche"
                    description={["Affiche principale du second tournoi de l'association 'The Battle Ground', inspiré d'une affiche du jeu 'Street Fighter III:2nd Impact' (1997 Capcom).",
                        "Les images comprennent l'affiche d'inspiration, ainsi que les rendus 3D fait sous Blender pour composer cette affiche.",
                    ]}
                    imagelink={[
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Affiches%20TBG/UA2nd/2nd%20impact%20affiche.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Affiches%20TBG/UA2nd/Bowser%20explosion.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Affiches%20TBG/UA2nd/Ryu%20pause%20from%20above.png",
                    ]}
                    backgroundcolor={itemBackgroundColor}
                    bordercolor={itemBorderColor}
                    tags={["Blender", "Paint.net"]}
                    popup={true}
                    overallModalState={overallModal}
                    toggleOverallModal={toggleOverallModal}
                ></Card>
                <Card
                    title="[TBG] Underground Arena: New Generation - Affiches/Clip"
                    description={["En plus d'être président, je suis aussi le graphiste de l'association The Battle Ground. A l'occasion de notre premier tournoi sur le jeu 'Super Smash Bros. Ultimate' (2018 Nintendo, Sora | Bandai Namco), j'ai réalisé un clip vidéo inspiré de la cinématique d'introduction de 'Street Fighter III: New Generation' (1997 Capcom).",
                        "Chacune des frames ont été extraites pour en faire des affiches à part. Dans cette collection d'images que vous pouvez visionner, vous aurez le rendu après quelques retouches, suivi de l'affiche en elle même.",
                        "Dans le lien ci dessous se trouvera une comparaison entre la vidéo que j'ai réalisé, et la cinématique d'origine."
                    ]}
                    imagelink={[
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Affiches%20TBG/UAnew/Roy%20shadered%20w%20background.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Affiches%20TBG/UAnew/Roy.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Affiches%20TBG/UAnew/Pyra%20%26%20Mythra%20shaded%20w%20background.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Affiches%20TBG/UAnew/Aegis.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Affiches%20TBG/UAnew/Cloud%20shaded%20w%20background.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Affiches%20TBG/UAnew/Cloud.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Affiches%20TBG/UAnew/Falcon%20shaded%20w%20background.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Affiches%20TBG/UAnew/Falcon.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Affiches%20TBG/UAnew/Fox%20shaded%20w%20background.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Affiches%20TBG/UAnew/Fox.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Affiches%20TBG/UAnew/Incineroar.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Affiches%20TBG/UAnew/LM.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Affiches%20TBG/UAnew/Mario%20shaded%20w%20background.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Affiches%20TBG/UAnew/Mario.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Affiches%20TBG/UAnew/Puff%20shaded%20w%20background.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Affiches%20TBG/UAnew/Puff.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Affiches%20TBG/UAnew/Sephiroth%20shaded%20w%20shadow.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Affiches%20TBG/UAnew/Sephiroth.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Affiches%20TBG/UAnew/Zelda%20shaded%20w%20background.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Affiches%20TBG/UAnew/Zelda.png",
                    ]}
                    redirection_link="https://youtu.be/XXY-FQMnk6M"
                    backgroundcolor={itemBackgroundColor}
                    bordercolor={itemBorderColor}
                    tags={["Blender", "Paint.net", "Premiere Pro"]}
                    popup={true}
                    overallModalState={overallModal}
                    toggleOverallModal={toggleOverallModal}
                ></Card>
                <Card
                    title="[TBG] Underground Arena: New Generation - Top 8"
                    description={["Graphique du top 8 du premier tournoi de notre association 'The Battle Ground'. Chaque participant est représenté par son main (soit le personnage qu'il joue le plus).",
                        "Cette affiche de résultats est inspirée d'une affiche publicitaire pour 'Street Fighter III: New Generation' (1997 Capcom), et cette affiche est justement la seconde image de cette sélection pour faire une comparaison.",
                        "Le reste sont les rendus fait sous Blender pour alimenter l'affiche."
                    ]}
                    imagelink={[
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Top%208/UAnew/Top%208%20UANG.png",
                        "https://pbs.twimg.com/media/GJ571eGWQAAsgnl?format=jpg&name=large",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Top%208/UAnew/Bowser%20top%208.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Top%208/UAnew/Corrin%20top%208.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Top%208/UAnew/Inci.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Top%208/UAnew/Mythra%20back.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Top%208/UAnew/Pyra%20back.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Top%208/UAnew/ROB.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Top%208/UAnew/Ridley.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/TBG/Top%208/UAnew/Yoshi%20là.png",
                    ]}
                    backgroundcolor={itemBackgroundColor}
                    bordercolor={itemBorderColor}
                    tags={["Blender", "Paint.net"]}
                    popup={true}
                    overallModalState={overallModal}
                    toggleOverallModal={toggleOverallModal}
                ></Card>
                <Card
                    title="[Vidéo] FFVII"
                    description={["Vidéo que j'ai réalisé à la place d'un oral dans le cadre des cours de philosophie en classe de terminale. La première image que vous voyez est la miniature, ainsi que l'image associée.",
                        "Paix à l'âme de Mr. Mertz."
                    ]}
                    imagelink={[ "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Smash%20renders/FF7/FF7%20minia.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Smash%20renders/FF7/Cloud%20thumbnail.png"
                    ]}
                    redirection_link="https://discord.gg/KFGpARd"
                    backgroundcolor={itemBackgroundColor}
                    bordercolor={itemBorderColor}
                    tags={["Premiere Pro","Blender", "Paint.net"]}
                    popup={true}
                    overallModalState={overallModal}
                    toggleOverallModal={toggleOverallModal}
                ></Card>
                <Card
                    title="Smash Eurélien"
                    description={["Je suis l'administrateur (et non TO) de la communauté Smash du département d'Eure-et-Loir dont la majorité des activités se déroulent à la médiathèque de Chartres.",
                        "Les rares occasions où j'ai eut le temps, j'ai pu faire des affiches. On peut notamment voir la différence de mon niveau entre l'affiche avec le rendu 3D, et les autres.",
                        "Pour plus d'informations sur cette communauté, le lien redirige vers ce serveur Discord."
                    ]}
                    imagelink={[ "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Smash%20renders/Eurélien/Logo%20Smash%20Eure-et-loir.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Smash%20renders/Eurélien/Affiche%20tournoi%20Médiatèque.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Smash%20renders/Eurélien/Falcon%20pose%20w%20lights.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Smash%20renders/Eurélien/results%20tournament%20EeL%2018.04.2020.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Smash%20renders/Eurélien/results%20tournament%20EeL%2030.05.2020.png"
                    ]}
                    redirection_link="https://discord.gg/KFGpARd"
                    backgroundcolor={itemBackgroundColor}
                    bordercolor={itemBorderColor}
                    tags={["Blender", "Paint.net", "Communauté"]}
                    popup={true}
                    overallModalState={overallModal}
                    toggleOverallModal={toggleOverallModal}
                ></Card>
                <Card
                    title="Smash renders"
                    description={["Rendus 3D de personnages et environnements tirés de 'Super Smash Bros. Ultimate' (2018 Nintendo, Sora | Bandai Namco) sans spécialement de contexte."
                    ]}
                    imagelink={["https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Smash%20renders/Render%20image.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Smash%20renders/Zelda.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Smash%20renders/Captain%20Falcon.png"
                    ]}
                    backgroundcolor={itemBackgroundColor}
                    bordercolor={itemBorderColor}
                    tags={["Blender"]}
                    popup={true}
                    overallModalState={overallModal}
                    toggleOverallModal={toggleOverallModal}
                ></Card>
                <Card
                    title="Valorant renders"
                    description={["Rendus 3D de personnages et environnements tirés de Valorant (2020 Riot Games) sans spécialement de contexte."
                    ]}
                    imagelink={["https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Valorant%20renders/Test%20Killjoy%204K.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Valorant%20renders/Omen%20test.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Valorant%20renders/Sage%20Frenzy%2BStinger.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Valorant%20renders/Sage%20Stinger%20pose%20(de%20%2B%20prêt%20en%20fait).png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Valorant%20renders/concentrate%20Sova2.png",
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/Valorant%20renders/Doctor%20Freeze%20%2B%20Skullyjai.png",
                    ]}
                    backgroundcolor={itemBackgroundColor}
                    bordercolor={itemBorderColor}
                    tags={["Blender"]}
                    popup={true}
                    overallModalState={overallModal}
                    toggleOverallModal={toggleOverallModal}
                ></Card>
                <Card
                    title="F-16 flight"
                    description={["J'aime bien les avions de chasses, du coup j'avais commencé une animation sur Blender. L'image que vous voyez ce n'est qu'un simple screen, si vous voulez plus d'informations cliquer sur le lien en dessous."
                    ]}
                    imagelink={[
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/3D%20Render/F-16%26F-18.png"
                    ]}
                    redirection_link="https://youtu.be/b6XCUKFjTOc"
                    backgroundcolor={itemBackgroundColor}
                    bordercolor={itemBorderColor}
                    tags={["Blender"]}
                    popup={true}
                    overallModalState={overallModal}
                    toggleOverallModal={toggleOverallModal}
                ></Card>
                <Card
                    title="My Mains"
                    description={["Rendu 3D de mes mains (soit les personnages que je joue le plus) sur 'Valorant' (2020 Valorant), 'Super Smash Bros. Ultimate' (2018 Nintendo, Sora | Bandai Namco) et 'Super Smash Bros. Melee' (2001 Nintendo | HAL Laboratory).",
                        "A vrai dire, ils sont tous encore mes mains sauf Sova pour Valorant.",
                        "C'est encore la bannière de ma chaîne Youtube principale, je vous redirige donc vers celle ci."
                    ]}
                    imagelink={[
                        "https://raw.githubusercontent.com/Zratex/gallery/main/Gallery%20collection/3D%20Render/Zratey%20mains%204K.png"
                    ]}
                    redirection_link="https://www.youtube.com/@Zratey"
                    backgroundcolor={itemBackgroundColor}
                    bordercolor={itemBorderColor}
                    tags={["Blender"]}
                    popup={true}
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