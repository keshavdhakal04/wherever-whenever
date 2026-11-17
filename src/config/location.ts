
export interface LocationConfig {
  latitude: number;
  longitude: number;
  updatedAt: string;
  label?: string;
}

export const LOCATION: LocationConfig = {
  latitude: 45.44989,
  longitude: 75.59911,
  updatedAt: "November 17, 2026",
  label: "Here",
};
