import BubbleA from "./BubbleA";
import bgGif from "../assets/bg.gif";
import { motion } from "framer-motion";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import ShinyText from "./ShinyText";

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
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40 -z-10" />

      {/* 3D A */}
      <BubbleA />

      {/* CONTENT LAYER */}
      <div className="relative z-10 h-full flex items-end justify-between px-14 pb-32">
        {/* LEFT TEXT */}
        <motion.div
          className="max-w-xl font-semibold pointer-events-none"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex items-start gap-6">
            {/* Vertical Line */}
            <div className="w-[5px] h-20 bg-white/80"></div>

            {/* Text */}
            <div>
              <ShinyText
                text="At AdveneCulture, we offer creative services that elevate brands and leave a lasting impression by building everything — from branding to visuals — with purpose and passion."
                speed={3}
                delay={0}
                color="#d1d5db"
                shineColor="#ffffff"
                spread={160}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT ICONS */}
        <motion.div
          className="flex gap-8 text-white/80 pointer-events-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <a
            href="https://www.instagram.com/adveneculture"
            target="blank"
            className="hover:text-white hover:scale-125 transition cursor-pointer"
          >
            <Instagram size={32} />
          </a>

          <a
            href="https://wa.me/9923200206"
            target="blank"
            className="hover:text-white hover:scale-125 transition cursor-pointer"
          >
            <MessageCircle size={32} />
          </a>

          <a
            href="#"
            className="hover:text-white hover:scale-125 transition cursor-pointer"
          >
            <Mail size={32} />
          </a>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <a
        href="#about"
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-7 h-11 border-2 border-white/70 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-scroll"></div>
        </div>
      </a>

      {/* BOTTOM THIN LINE */}
      <div className="absolute bottom-12 left-16 right-16 h-[1px] bg-white/70 z-10" />
    </section>
  );
}
