export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface LocationData {
  city: string;
  region?: string;
  country?: string;
  coordinates?: Coordinates;
}

export interface LocationResponse {
  location: LocationData | null;
  loading: boolean;
  error: string | null;
}
