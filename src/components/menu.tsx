import { useState } from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

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

    return (
        <>
            <div id="main_image">
                <img src={illustrationImagePath || '/public/vite.svg'} alt="Center Illustration" />
            </div>
            <div className="mainMenu">
                <div className="mainMenu-split">
                    <div className="mainMenuItem" id="mainmenuDescription">
                        {hovered && <p>{hovered}</p>}
                    </div>
                    {categories.map((category) => {
                        if (category.name === 'Projects' || category.name === 'Gamemode') {
                            return (
                                <Link to={category.URL}
                                    id={category.name}
                                    key={category.name}
                                    className="mainMenuItem"
                                    onMouseEnter={() => {
                                        setHovered(category.description);
                                        setIllustrationImagePath(category.imagePath);
                                    }}
                                    onMouseLeave={() => {
                                        setHovered('');
                                        setIllustrationImagePath('/public/vite.svg');
                                    }}
                                >
                                    <h2>{category.name}</h2>
                                </Link>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className="mainMenu-split">
                    {categories.map((category) => {
                        if (category.name != 'Projects' && category.name != 'Gamemode') {
                            return (
                                <Link to={category.URL}
                                    id={category.name}
                                    key={category.name}
                                    className="mainMenuItem"
                                    onMouseEnter={() => {
                                        setHovered(category.description);
                                        setIllustrationImagePath(category.imagePath);
                                    }}
                                    onMouseLeave={() => {
                                        setHovered('');
                                        setIllustrationImagePath('/public/vite.svg');
                                    }}
                                >
                                    <h2>{category.name}</h2>
                                </Link>
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
