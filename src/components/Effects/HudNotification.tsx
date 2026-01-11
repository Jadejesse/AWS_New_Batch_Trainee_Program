import React, { useEffect, useState } from 'react';
import './HudNotification.css';

interface HudNotificationProps {
    message: string;
    subMessage?: string;
    onComplete?: () => void;
}

const HudNotification: React.FC<HudNotificationProps> = ({ message, subMessage, onComplete }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            setTimeout(() => onComplete?.(), 500);
        }, 3000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    if (!visible) return null;

    return (
        <div className="hud-notification-overlay">
            <div className="hud-notification-container">
                <div className="glitch-wrapper">
                    <h1 className="hud-title" data-text={message}>{message}</h1>
                </div>
                {subMessage && (
                    <div className="hud-sub-wrapper">
                        <p className="hud-sub">{subMessage}</p>
                    </div>
                )}
                <div className="hud-bars">
                    <div className="hud-bar left"></div>
                    <div className="hud-bar right"></div>
                </div>
            </div>
        </div>
    );
};

export default HudNotification;
