import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DateDisplay from '../DateDisplay/DateDisplay';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import LocationDisplay from '../LocationDisplay/LocationDisplay';
import './InfoPanel.css';

const InfoPanel: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const clickSoundRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log('Autoplay prevented:', err));
    }
  }, []);


  const playClickSound = () => {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play().catch(err => console.log('Click sound error:', err));
    }
  };

  const toggleMusic = () => {
    playClickSound();
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNavClick = () => {
    playClickSound();
  };

  return (
    <div className="info-panel">
      {/* Header with name and title */}
      <div className="profile-header">
        <h1 className="profile-name">Jade</h1>
        <h2 className="profile-title">Senior Cloud and Infra Engineer</h2>
      </div>

      {/* Navigation Buttons - Vertical */}
      <div className="nav-buttons">
        <Link to="/aws-vs-amazon" className="nav-button" onClick={handleNavClick}>
          AWS VS Amazon
        </Link>
        <Link to="/what-is-aws" className="nav-button" onClick={handleNavClick}>
          What is AWS
        </Link>
      </div>

      {/* Weather and Date Info - Bottom */}
      <div className="weather-section">
        <WeatherWidget />
        <LocationDisplay />
        <DateDisplay />
      </div>

      {/* Lo-Fi Music Button - At the very bottom */}
      <button className="music-button" onClick={toggleMusic}>
        <span className="music-icon">{isPlaying ? '🎵' : '🔇'}</span>
        <span className="music-text">Lo-Fi Music</span>
      </button>

      {/* Hidden audio elements */}
      <audio ref={audioRef} loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={clickSoundRef}>
        <source src="https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default InfoPanel;
