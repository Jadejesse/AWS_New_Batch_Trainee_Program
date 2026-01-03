import { useState, useEffect } from 'react';
import { LocationData, LocationResponse } from '../types/location';

export function useLocation(): LocationResponse {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get user's coordinates using browser geolocation
        if (!navigator.geolocation) {
          throw new Error('Geolocation not supported');
        }

        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            // Use a reverse geocoding API to get city name in English
            // Using OpenStreetMap Nominatim API (free, no API key needed)
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=en`
            );

            if (!response.ok) {
              throw new Error('Failed to fetch location');
            }

            const data = await response.json();
            const address = data.address;

            setLocation({
              city: address.city || address.town || address.village || 'Unknown',
              region: address.state || address.region,
              country: address.country_code?.toUpperCase()
            });
            setLoading(false);
          },
          (err) => {
            console.error('Geolocation error:', err);
            // Fallback to Melbourne if permission denied
            setLocation({
              city: 'Melbourne',
              region: 'Victoria',
              country: 'AU'
            });
            setError('Location permission denied');
            setLoading(false);
          }
        );
      } catch (err) {
        console.error('Location error:', err);
        setLocation({
          city: 'Melbourne',
          region: 'Victoria',
          country: 'AU'
        });
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  return { location, loading, error };
}
