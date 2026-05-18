import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#", label: "Inicio" },
  { href: "#reparaciones", label: "Reparaciones" },
  { href: "#alquileres", label: "Equipos" },
  { href: "#repuestos", label: "Repuestos" },
  { href: "#preguntas", label: "FAQ" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between bg-navy/25 backdrop-blur-sm">


        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              className="text-sm font-medium text-foreground hover:text-amber transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Abrir menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden mx-4 rounded-xl shadow-lg bg-navy-light/95 border border-border backdrop-blur">
          {navLinks.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm font-medium text-foreground hover:text-amber hover:bg-navy-lighter transition-colors"
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
