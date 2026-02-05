import BubbleA from "./BubbleA";
import bgGif from "../assets/bg.gif";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden text-white">
      {/* GIF Background */}
      <img
        src={bgGif}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover 
                   opacity-0 animate-fadeInBg -z-20"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 -z-10" />

      {/* 3D A */}
      <BubbleA />

      {/* CONTENT LAYER */}
      <div className="relative z-10 h-full flex items-end justify-between px-16 pb-32">
        {/* LEFT TEXT */}
        <div className="max-w-xl">
          <p className="text-gray-300 text-lg leading-relaxed">
            At AdveneCulture, we offer creative services that elevate brands and
            leave a lasting impression by building everything — from branding to
            visuals — with purpose and passion.
          </p>
        </div>

        {/* RIGHT COPYRIGHT */}
        <div>
          <p className="text-gray-300 text-lg">© 2026</p>
        </div>
      </div>
    </section>
  );
}
