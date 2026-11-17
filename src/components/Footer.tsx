import { delay } from "../lib/motion";

export function Footer() {
  return (
    <footer className="fade border-t border-charcoal/15 pt-4" style={delay(1.9)}>
      <p className="font-serif text-lg italic text-stone-text">Somewhere in the world.</p>
    </footer>
  );
}
