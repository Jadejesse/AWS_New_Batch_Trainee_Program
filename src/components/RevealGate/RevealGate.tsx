import './RevealGate.css';

interface RevealGateProps {
  headline?: string;
  tagline?: string;
  children: React.ReactNode;
}

export default function RevealGate({ children }: RevealGateProps) {
  // Always show content directly - no click wait
  return (
    <>
      <div className="reveal-content on">{children}</div>
    </>
  );
}


