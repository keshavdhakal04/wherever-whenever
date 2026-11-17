import { delay } from "../lib/motion";
import { Monogram } from "./Monogram";

export function Header() {
  return (
    <header
      className="fade flex items-center justify-between border-b border-charcoal/15 pb-4"
      style={delay(0.2)}
    >
      <Monogram className="h-7 w-7 text-charcoal" />
      <p className="text-[0.8125rem] tabular-nums tracking-[0.08em] text-stone-text">2026</p>
    </header>
  );
}
