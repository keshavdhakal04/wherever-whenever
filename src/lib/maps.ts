import type { LocationConfig } from "../config/location";

export interface MapLinks {
  apple: string;
  google: string;
}

export type MapLinksResult =
  | { ok: true; links: MapLinks; coordinates: string }
  | { ok: false; error: string };

/** Throws a RangeError when the pair is not a real point on Earth. */
export function validateCoordinates(latitude: number, longitude: number): void {
  if (!Number.isFinite(latitude) || latitude < -90 || latitude > 90) {
    throw new RangeError(`Latitude must be between -90 and 90 (received ${latitude}).`);
  }
  if (!Number.isFinite(longitude) || longitude < -180 || longitude > 180) {
    throw new RangeError(`Longitude must be between -180 and 180 (received ${longitude}).`);
  }
}

/** 45.4215° N, 75.6972° W */
export function formatCoordinates(latitude: number, longitude: number): string {
  const lat = `${Math.abs(latitude).toFixed(4)}° ${latitude >= 0 ? "N" : "S"}`;
  const lng = `${Math.abs(longitude).toFixed(4)}° ${longitude >= 0 ? "E" : "W"}`;
  return `${lat}, ${lng}`;
}

export function buildMapLinks({ latitude, longitude, label }: LocationConfig): MapLinks {
  validateCoordinates(latitude, longitude);
  const pair = `${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}`;
  const name = label ? `&q=${encodeURIComponent(label)}` : "";
  return {
    apple: `https://maps.apple.com/?ll=${pair}${name}`,
    google: `https://www.google.com/maps/search/?api=1&query=${pair}`,
  };
}

/** Never throws: a typo in the config disables the buttons instead of crashing the page. */
export function resolveMapLinks(location: LocationConfig): MapLinksResult {
  try {
    return {
      ok: true,
      links: buildMapLinks(location),
      coordinates: formatCoordinates(location.latitude, location.longitude),
    };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "Invalid location." };
  }
}
