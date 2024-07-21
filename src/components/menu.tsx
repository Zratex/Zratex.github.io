import { useState } from 'react';
import './menu.css';
import gsap from 'gsap';

const Menu = () => {
    const [hovered, setHovered] = useState('');
    const [illustrationImagePath, setIllustrationImagePath] = useState('');

    const categories = [
    { name: 'Projects', description: 'Description des Projects', URL: '/projects', imagePath: '/src/assets/react.svg' },
    { name: 'Véronica', description: 'Description de Véronica', URL: '', imagePath: '' },
    { name: 'Gamemode', description: 'Description de Gamemode', URL: '', imagePath: '' },
    { name: 'Paramètres', description: 'Description des Paramètres', URL: '', imagePath: '' },
    { name: 'Gallery', description: 'Description de la Gallery', URL: '', imagePath: '' },
    ];

    const updateCenterImage = (description="", imagePath="") => {
        setHovered(description);
        setIllustrationImagePath(imagePath);
    };

    const redirect = (URL: string) => {
        if (URL) {
            gsap.to('body', {
                duration: 0.5,
                opacity: 0,
                onComplete: function () {
                    window.location.href = `/#${URL}`;
                },
            });
        }
    }

    return (
        <>
            <div id="main_image">
                <img src={illustrationImagePath || '/vite.svg'} alt="Center Illustration" />
            </div>
            <div className="mainMenu">
                <div className="mainMenu-split">
                    <div className="mainMenuItem" id="mainmenuDescription">
                        {hovered && <p>{hovered}</p>}
                    </div>
                    {categories.map((category) => {
                        if (category.name === 'Projects' || category.name === 'Gamemode') {
                            return (
                                <div onClick={() => redirect(category.URL)}
                                    id={category.name}
                                    key={category.name}
                                    className="mainMenuItem"
                                    onMouseEnter={() => updateCenterImage(category.description,category.imagePath)}
                                    onMouseLeave={() => updateCenterImage()}
                                >
                                    <h2>{category.name}</h2>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className="mainMenu-split">
                    {categories.map((category) => {
                        if (category.name != 'Projects' && category.name != 'Gamemode') {
                            return (
                                <div onClick={() => redirect(category.URL)}
                                    id={category.name}
                                    key={category.name}
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
                                    <h2>{category.name}</h2>
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
