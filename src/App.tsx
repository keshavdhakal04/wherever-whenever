import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LocationSection } from "./components/LocationSection";

export default function App() {
  return (
    <div
      className="relative mx-auto flex min-h-svh w-full max-w-[90rem] flex-col px-6 sm:px-10 lg:px-16
        pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.25rem,env(safe-area-inset-bottom))]
        pl-[max(1.5rem,env(safe-area-inset-left))] pr-[max(1.5rem,env(safe-area-inset-right))]
        before:pointer-events-none before:absolute before:inset-y-0 before:left-16 before:hidden before:w-px before:bg-charcoal/10 lg:before:block
        after:pointer-events-none after:absolute after:inset-y-0 after:right-16 after:hidden after:w-px after:bg-charcoal/10 lg:after:block"
    >
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
