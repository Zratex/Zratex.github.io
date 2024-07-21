import React, { useState } from "react";
import './card.css';

function Card({
    title = "Titre",
    description = "Description",
    imagelink = "", //Lien hypertexte vers l'image d'illustration. La chaîne vide mettra une image par défaut
    shape = "default", //"default" par défaut (donc 100% en width et height), "rectangle-w" pour 100% en largeur, et "rectangle-h" pour 100% en hauteur
    tags = {}, //Array de tags en string
    popup = false, //Si vrai, affiche une popup, sinon, redirige vers le lien mis avec la Card
    redirection_link = "", //Si chaîne vide (par défaut), la redirection sera désactivée. Si popup est en true, un bouton de redirection sera mis en place dans la popup, sinon, la carte redirige directement vers ce lien
    backgroundcolor = "", //Couleur en RGB des effets de fond de la carte
    bordercolor = "", //Couleur en RGB des effets de bord de la carte
}) {
    if (backgroundcolor=="") {
        backgroundcolor="255, 255, 255";
    }
    if (bordercolor=="") {
        bordercolor="255, 255, 255";
    }

    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const handleMouseMove = (e: any) => {
        const rect = e.target.getBoundingClientRect();
        const x = e .clientX - rect.left;
        const y = e.clientY - rect.top;
        setMouseX(x);
        setMouseY(y);
    }
    return (
        <div className="card__cell"
        onMouseMove={handleMouseMove}
        style={{
            '--mouse-x': `${mouseX}px`,
            '--mouse-y': `${mouseY}px`,
            '--card-background-color': backgroundcolor,
            '--card-border-color': bordercolor,
            } as React.CSSProperties }>
            <div className="card__contentEffect">
                <header>
                    <h2>{title}</h2>
                </header>
            </div>
        </div>
    );
}

export default Card;