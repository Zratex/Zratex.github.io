import { useState } from 'react';
import './menu.css';
import Spline from '@splinetool/react-spline';

const Menu = () => {
    const [hovered, setHovered] = useState('');
    const [illustrationImagePath, setIllustrationImagePath] = useState('');

    const categories = [
    { name: 'Projets', description: 'Portfolio des projets réalisés par Zratey', URL: '/projects', imagePath: 'https://raw.githubusercontent.com/Zratex/gallery/main/Images/code.PNG',
        scenePath: "https://prod.spline.design/vpDmpZVf4QfWPY31/scene.splinecode"
    },
    { name: 'Véronica', description: 'Toutes les pages à propos du projet Véronica', URL: '/veronica', imagePath: 'https://raw.githubusercontent.com/Zratex/gallery/main/Images/V%C3%A9ronica%20oe.png',
        scenePath: "https://prod.spline.design/LceoT9TScpMFQlzo/scene.splinecode"
    },
    { name: 'Gamemode', description: '(Description de Gamemode à faire)', URL: '', imagePath: '',
        scenePath: "https://prod.spline.design/ndmjSLBU26sY4FVT/scene.splinecode"
    },
    { name: 'Paramètres', description: '(Description des Paramètres à faire)', URL: '', imagePath: '',
        scenePath: "https://prod.spline.design/YXOLoyD7eXKuCWSg/scene.splinecode"        
    },
    { name: 'Gallery', description: 'Gallery diverse et variée', URL: '/gallery', imagePath: 'https://raw.githubusercontent.com/Zratex/gallery/main/Images/GalleryIcon128x128.png',
        scenePath: "https://prod.spline.design/5oABSte8SlZEK75m/scene.splinecode"
    },
    ];

    const updateCenterImage = (description="", imagePath="") => {
        setHovered(description);
        setIllustrationImagePath(imagePath);
    };

    const redirect = (URL: string) => {
        if (URL) {
            window.location.href = `/#${URL}`;
        }
    }

    return (
        <>
            <div id="main_image">
                <img src={illustrationImagePath || 'https://raw.githubusercontent.com/Zratex/gallery/main/Images/profile.png'} alt="Center Illustration" />
            </div>
            <div className="mainMenu">
                <div className="mainMenu-split">
                    <div className="mainMenuItem" id="mainmenuDescription">
                        <p>{hovered || "Bienvenue sur le site de Zratey !"}</p>
                    </div>
                    {categories.map((category,index) => {
                        if (category.name === 'Projets' || category.name === 'Gamemode') {
                            return (
                                <div onClick={() => redirect(category.URL)}
                                    id={category.name}
                                    key={index}
                                    className="mainMenuItem"
                                    onMouseEnter={() => updateCenterImage(category.description,category.imagePath)}
                                    onMouseLeave={() => updateCenterImage()}
                                >
                                    <div className="mainMenu-subitem">
                                        <div className="mainMenu-subitem-scene">
                                            <Spline scene={category.scenePath || "https://prod.spline.design/vpDmpZVf4QfWPY31/scene.splinecode"}></Spline>
                                        </div>
                                        <div className="mainMenu-subitem-text">
                                            <h1>{category.name}</h1>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className="mainMenu-split">
                    {categories.map((category,index) => {
                        if (category.name != 'Projets' && category.name != 'Gamemode') {
                            let aspectRatio = [60,40]; //60 pour la scène, 40 pour le texte
                            if (category.name=="Paramètres") {
                                aspectRatio = [50,50];
                            }
                            return (
                                <div onClick={() => redirect(category.URL)}
                                    id={category.name}
                                    key={index}
                                    className="mainMenuItem"
                                    onMouseEnter={() => {
                                        setHovered(category.description);
                                        setIllustrationImagePath(category.imagePath);
                                    }}
                                    onMouseLeave={() => {
                                        setHovered('');
                                        setIllustrationImagePath('');
                                    }}
                                >
                                    <div className="mainMenu-subitem" style={{flexDirection: 'row-reverse'}}>
                                        <div className="mainMenu-subitem-scene" style={{width: `${aspectRatio[0]}%`}}>
                                            <Spline scene={category.scenePath || "https://prod.spline.design/vpDmpZVf4QfWPY31/scene.splinecode"}></Spline>
                                        </div>
                                        <div className="mainMenu-subitem-text" style={{justifyContent: 'flex-end', width: `${aspectRatio[1]}%`}}><h1>{category.name}</h1></div>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </>
    );
};

export default Menu;
