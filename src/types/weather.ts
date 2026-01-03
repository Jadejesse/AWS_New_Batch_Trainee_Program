export interface WeatherData {
  temperature: number;
  condition: string;
  icon: string;
  unit: 'C' | 'F';
  humidity?: number;
  windSpeed?: number;
}

export interface WeatherResponse {
  weather: WeatherData | null;
  loading: boolean;
  error: string | null;
}
