import { Compass, MapPin } from "lucide-react";
import { LOCATION } from "../config/location";
import { resolveMapLinks } from "../lib/maps";
import { delay } from "../lib/motion";
import { MapButton } from "./MapButton";

export function LocationSection() {
  const result = resolveMapLinks(LOCATION);

  return (
    <section
      aria-labelledby="where"
      className="fade grid gap-6 border-t border-charcoal/15 py-7 sm:py-9 lg:grid-cols-12 lg:items-end lg:gap-0"
      style={delay(1.6)}
    >
      <div className="lg:col-span-5">
        <p id="where" className="flex items-center gap-3 text-[0.8125rem] tracking-[0.04em] text-stone-text">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="ping absolute inset-0 rounded-full bg-bronze" />
            <span className="relative h-2 w-2 rounded-full bg-bronze" />
          </span>
          Current location
        </p>
        <p className="mt-3 font-serif text-[1.75rem] leading-tight tabular-nums text-charcoal sm:text-4xl">
          {result.ok ? result.coordinates : "Location unavailable"}
        </p>
        <p className="mt-2 text-[0.8125rem] text-stone-text">
          {result.ok ? `Updated ${LOCATION.updatedAt}` : result.error}
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row lg:col-span-7 lg:justify-end">
        <MapButton href={result.ok ? result.links.apple : null} app="Apple Maps" icon={Compass} variant="solid" />
        <MapButton href={result.ok ? result.links.google : null} app="Google Maps" icon={MapPin} variant="outline" />
      </div>
    </section>
  );
}
