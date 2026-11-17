import type { CSSProperties } from "react";

/** Sets the animation delay (seconds) consumed by .draw / .rise / .fade in index.css. */
export function delay(seconds: number): CSSProperties {
  return { "--d": `${seconds}s` } as CSSProperties;
}
