import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#", label: "Start" },
  { href: "#reparaciones", label: "Story" },
  { href: "#alquileres", label: "Rates" },
  { href: "#repuestos", label: "Benefits" },
  { href: "#preguntas", label: "FAQ" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-semibold text-gray-900">
          Fayfa
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-900"
          aria-label="Abrir menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden mx-4 rounded-xl shadow-lg bg-white/95 backdrop-blur">
          {navLinks.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
