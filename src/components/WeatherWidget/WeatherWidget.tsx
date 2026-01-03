import { useWeather } from '../../hooks/useWeather';
import './WeatherWidget.css';

const WeatherWidget: React.FC = () => {
  const { weather, loading, error } = useWeather();

  if (loading) return <div className="weather-loading">Loading...</div>;
  if (error) return <div className="weather-error">Weather unavailable</div>;

  return (
    <div className="weather-widget">
      <span className="temperature">{weather?.temperature}°{weather?.unit}</span>
      <span className="condition">{weather?.condition}</span>
    </div>
  );
};

export default WeatherWidget;
