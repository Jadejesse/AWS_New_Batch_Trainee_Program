import { useLocation } from '../../hooks/useLocation';
import './LocationDisplay.css';

const LocationDisplay: React.FC = () => {
  const { location, loading, error } = useLocation();

  if (loading) return <div className="location-loading">Detecting location...</div>;
  if (error) return <div className="location-error">Location unavailable</div>;

  return (
    <div className="location-display">
      📍 {location?.city}{location?.region ? `, ${location.region}` : ''}
    </div>
  );
};

export default LocationDisplay;
