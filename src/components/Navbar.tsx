export default function Navbar() {
  return (
    <header className="fixed top-6 w-full flex justify-center z-50">
      {/* Glow background */}
      <div className="absolute inset-0 flex justify-between px-10 pointer-events-none">
        <div className="w-40 h-40 bg-red-600/40 blur-[120px] rounded-full" />
        <div className="w-40 h-40 bg-red-600/40 blur-[120px] rounded-full" />
      </div>

      {/* Navbar */}
      <nav
        className="
        relative
        flex items-center justify-between
        w-[90%] max-w-6xl
        px-8 py-3
        rounded-full
        bg-white/5
        backdrop-blur-lg
        border border-white/10
        shadow-lg
      "
      >
        {/* Logo */}
        <div className="text-white font-semibold text-lg">
          Advene Cult.
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-white/80 text-sm">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Work</li>
          <li className="hover:text-white cursor-pointer">Services</li>
        </ul>

        {/* CTA */}
        <button
          className="
          px-5 py-2
          rounded-full
          bg-white text-black
          text-sm font-medium
          hover:scale-105
          transition
        "
        >
          Contact Us
        </button>
      </nav>
    </header>
  );
}
