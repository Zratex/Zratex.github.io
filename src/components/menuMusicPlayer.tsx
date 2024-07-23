import { useRef, useState } from 'react';

const MenuMusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlayPause = () => {
    if (audioRef.current) {
        audioRef.current.volume=0.1;
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
    <div>
      <audio ref={audioRef} loop>
        <source src="https://raw.githubusercontent.com/Zratex/gallery/main/main menu themes/Menu 1 - Super Smash Bros. Melee.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default MenuMusicPlayer;
