import React from 'react';
import { useKonamiCode } from '../../hooks/useKonamiCode';
import LedMatrix from '../Effects/LedMatrix';
import './RevealGate.css';

interface RevealGateProps {
  headline?: string;
  tagline?: string;
  children: React.ReactNode;
}

export default function RevealGate({ children }: RevealGateProps) {
  const isKonamiActive = useKonamiCode();
  // Always show content directly - no click wait
  return (
    <>
      {isKonamiActive && <LedMatrix />}
      <div className="reveal-content on">{children}</div>
    </>
  );
}
