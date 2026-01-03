import { useState, useEffect } from 'react';
import { WeatherData, WeatherResponse } from '../types/weather';

export function useWeather(): WeatherResponse {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get user's coordinates
        if (!navigator.geolocation) {
          throw new Error('Geolocation not supported');
        }

        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            // Use Open-Meteo API (free, no API key needed)
            const response = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&temperature_unit=celsius`
            );

            if (!response.ok) {
              throw new Error('Failed to fetch weather');
            }

            const data = await response.json();
            const current = data.current;

            // Map weather codes to conditions
            const weatherCode = current.weather_code;
            let condition = 'Clear';
            if (weatherCode === 0) condition = 'Clear';
            else if (weatherCode <= 3) condition = 'Cloudy';
            else if (weatherCode <= 67) condition = 'Rainy';
            else if (weatherCode <= 77) condition = 'Snowy';
            else if (weatherCode <= 99) condition = 'Stormy';

            setWeather({
              temperature: Math.round(current.temperature_2m),
              condition: condition,
              icon: '01d',
              unit: 'C' as const
            });
            setLoading(false);
          },
          (err) => {
            console.error('Geolocation error:', err);
            // Fallback to Melbourne weather
            fetchMelbourneWeather();
          }
        );
      } catch (err) {
        console.error('Weather error:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLoading(false);
      }
    };

    const fetchMelbourneWeather = async () => {
      try {
        // Melbourne coordinates
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=-37.8136&longitude=144.9631&current=temperature_2m,weather_code&temperature_unit=celsius`
        );
        const data = await response.json();
        const current = data.current;

        const weatherCode = current.weather_code;
        let condition = 'Clear';
        if (weatherCode === 0) condition = 'Clear';
        else if (weatherCode <= 3) condition = 'Cloudy';
        else if (weatherCode <= 67) condition = 'Rainy';
        else if (weatherCode <= 77) condition = 'Snowy';
        else if (weatherCode <= 99) condition = 'Stormy';

        setWeather({
          temperature: Math.round(current.temperature_2m),
          condition: condition,
          icon: '01d',
          unit: 'C' as const
        });
        setLoading(false);
      } catch (err) {
        setError('Weather unavailable');
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return { weather, loading, error };
}
