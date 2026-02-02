export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black text-white px-8 py-4 flex justify-between z-50">
      <h1 className="font-bold">Advene Cult.</h1>

      <div className="flex gap-6 text-sm">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Work</a>
        <a href="#" className="bg-neutral-800 px-4 py-2 rounded">
          Contact Us
        </a>
      </div>
    </nav>
  );
}
