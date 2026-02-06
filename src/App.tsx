import GradualBlur from "./components/GradualBlur";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

export default function App() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* SCROLLABLE CONTENT */}
      <div className="h-full overflow-y-auto">
        <Navbar />
        <Hero />
        <About />
        {/* other sections */}
      </div>

      {/* GLOBAL SCROLL BLUR */}
      <GradualBlur
        target="parent"
        position="bottom"
        height="7rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential
        opacity={1}
      />

    </section>
  );
}
