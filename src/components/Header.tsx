import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#reparaciones", label: "Reparaciones" },
  { href: "#alquileres", label: "Alquileres" },
  { href: "#repuestos", label: "Repuestos" },
  { href: "#curenas", label: "Cureñas" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex flex-col leading-none">
          <span className="font-display text-xl font-bold tracking-wide text-primary">
            REPUESTOS FAYFA
          </span>
          <span className="text-[10px] font-body tracking-[0.2em] text-muted-foreground uppercase">
            Camiones. Repuestos. Soluciones.
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Abrir menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden bg-background border-t border-border">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
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
