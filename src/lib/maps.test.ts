import { describe, expect, it } from "vitest";
import { buildMapLinks, formatCoordinates, resolveMapLinks, validateCoordinates } from "./maps";

const base = { updatedAt: "today" };

describe("validateCoordinates", () => {
  it("accepts the full valid range, including the edges", () => {
    expect(() => validateCoordinates(0, 0)).not.toThrow();
    expect(() => validateCoordinates(90, 180)).not.toThrow();
    expect(() => validateCoordinates(-90, -180)).not.toThrow();
  });
  it.each([
    [90.0001, 0],
    [-91, 0],
    [0, 180.5],
    [0, -181],
    [Number.NaN, 0],
    [0, Number.POSITIVE_INFINITY],
  ])("rejects %s, %s", (lat, lng) => {
    expect(() => validateCoordinates(lat, lng)).toThrow(RangeError);
  });
});

describe("buildMapLinks", () => {
  it("builds both URLs from the same coordinates", () => {
    const { apple, google } = buildMapLinks({ ...base, latitude: 45.4215, longitude: -75.6972 });
    expect(apple).toBe("https://maps.apple.com/?ll=45.4215,-75.6972");
    expect(google).toBe("https://www.google.com/maps/search/?api=1&query=45.4215,-75.6972");
  });
  it("adds an encoded pin name for Apple Maps when a label is set", () => {
    const { apple } = buildMapLinks({ ...base, latitude: 1, longitude: 2, label: "Café & Bar" });
    expect(apple).toBe("https://maps.apple.com/?ll=1,2&q=Caf%C3%A9%20%26%20Bar");
  });
  it("handles southern and eastern hemispheres", () => {
    const { google } = buildMapLinks({ ...base, latitude: -33.8688, longitude: 151.2093 });
    expect(google).toContain("query=-33.8688,151.2093");
  });
  it("throws on invalid input", () => {
    expect(() => buildMapLinks({ ...base, latitude: 200, longitude: 0 })).toThrow();
  });
});

describe("resolveMapLinks", () => {
  it("returns ok with links", () => {
    expect(resolveMapLinks({ ...base, latitude: 10, longitude: 20 }).ok).toBe(true);
  });
  it("returns an error instead of throwing", () => {
    expect(resolveMapLinks({ ...base, latitude: 10, longitude: 999 }).ok).toBe(false);
  });
});

describe("formatCoordinates", () => {
  it("formats hemispheres", () => {
    expect(formatCoordinates(45.4215, -75.6972)).toBe("45.4215° N, 75.6972° W");
    expect(formatCoordinates(-33.8688, 151.2093)).toBe("33.8688° S, 151.2093° E");
  });
});
