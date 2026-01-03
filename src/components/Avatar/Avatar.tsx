import React, { useState } from 'react';
import './Avatar.css';

const Avatar: React.FC = () => {
  const [currentAvatar, setCurrentAvatar] = useState(1);

  const toggleAvatar = () => {
    setCurrentAvatar(prev => prev === 1 ? 2 : 1);
  };

  return (
    <div className="avatar-container" onClick={toggleAvatar}>
      <img 
        src={currentAvatar === 1 ? '/Makima_avatar.jpg' : '/Reze_Avatar.jpg'} 
        alt="Avatar" 
        className="avatar-image"
      />
      <div className="avatar-glow"></div>
    </div>
  );
};

export default Avatar;
