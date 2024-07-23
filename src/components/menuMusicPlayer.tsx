import { useEffect, useRef, useState } from 'react';
import "./menuMusicPlayer.css";

const MenuMusicPlayer = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [musicSource, setMusicSource] = useState<string>('');

    const musicList = [
        "https://raw.githubusercontent.com/Zratex/gallery/main/main%20menu%20themes/Menu%201%20-%20Super%20Smash%20Bros.%20Melee.mp3",
        "https://raw.githubusercontent.com/Zratex/gallery/main/main%20menu%20themes/Menu%202%20-%20Super%20Smash%20Bros.%20Melee.mp3",
        "https://raw.githubusercontent.com/Zratex/gallery/main/main%20menu%20themes/Menu%201%20-%20Super%20Smash%20Bros.%20Brawl.mp3",
        "https://raw.githubusercontent.com/Zratex/gallery/main/main%20menu%20themes/Menu%20-%20Super%20Smash%20Bros.%20Wii%20U.mp3",
        "https://raw.githubusercontent.com/Zratex/gallery/main/main%20menu%20themes/Menu%20-%20Super%20Smash%20Bros.%20Ultimate.mp3"
    ];

    useEffect(() => {
        const randomMusic = musicList[Math.floor(Math.random() * musicList.length)];
        setMusicSource(randomMusic);
    }, []);

    useEffect(() => {
        if (musicSource && !audioRef.current) {
            audioRef.current = new Audio(musicSource);
            audioRef.current.volume = 0.1;
            audioRef.current.loop = true;
        }
    }, [musicSource]);

    const handlePlayPause = () => {
    if (audioRef.current) {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(error => {
            console.error('Erreur de lecture audio:', error);
        });
        }
        setIsPlaying(!isPlaying);
    }
    };

    return (
    <div className="music-player-button">
        <button onClick={handlePlayPause}>
            <img src={isPlaying ? 'https://raw.githubusercontent.com/Zratex/gallery/main/Images/MusicPlay.png'
                : 'https://raw.githubusercontent.com/Zratex/gallery/main/Images/MusicMute.png'}
            alt={isPlaying ? 'Pause Music' : 'Play Music'}
            />
        </button>
    </div>
    );
};

export default MenuMusicPlayer;
