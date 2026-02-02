import BubbleA from "./BubbleA";
import bgGif from "../assets/bg.gif";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* GIF Background */}
      <img
        src={bgGif}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover 
               opacity-0 animate-fadeInBg"
      />

      {/* Dark Overlay (important for contrast) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 -z-10" />

      {/* 3D Content */}
      <BubbleA />
    </section>
  );
}
