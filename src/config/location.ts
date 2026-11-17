
export interface LocationConfig {
  latitude: number;
  longitude: number;
  updatedAt: string;
  label?: string;
}

export const LOCATION: LocationConfig = {
  latitude: 75.59911,
  longitude: 45.44989,
  updatedAt: "November 17, 2026",
  label: "Here",
};
