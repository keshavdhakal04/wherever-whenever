import { delay } from "../lib/motion";
import { Dial } from "./Dial";

const LINES = [
  { text: "Wherever,", at: 0.5 },
  { text: "Whenever.", at: 0.65 },
] as const;

export function Hero() {
  return (
    <section
      aria-labelledby="statement"
      className="grid flex-1 items-center gap-8 py-8 sm:gap-12 sm:py-12 lg:grid-cols-12 lg:gap-0 lg:py-16"
    >
      <div className="order-last lg:order-first lg:col-span-7">
        <h1
          id="statement"
          className="engraved font-serif uppercase leading-[0.92] tracking-[0.015em] text-charcoal text-[min(15vw,7rem)] lg:text-[min(8.4vw,8rem)]"
        >
          {LINES.map(({ text, at }) => (
            <span key={text} className="block overflow-hidden pb-[0.07em]">
              <span className="rise" style={delay(at)}>
                {text}
              </span>
            </span>
          ))}
        </h1>
        <p
          className="fade mt-5 font-serif text-[1.65rem] italic leading-snug text-charcoal/80 sm:text-3xl"
          style={delay(1.3)}
        >
          You know where to find me.
        </p>
      </div>

      <div className="order-first mx-auto w-[min(72vw,19rem)] sm:w-[min(60vw,24rem)] lg:order-last lg:col-span-5 lg:w-full lg:max-w-[28rem] lg:justify-self-end">
        <Dial />
      </div>
    </section>
  );
}
