import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/brand/fayfa-logo-pablo-brenes-invertido.svg";
import logoCompact from "@/assets/brand/fayfa-logo-pablo-brenes-sin-eslogan-invertido.svg";

const navLinks = [
  { href: "#reparaciones", label: "Reparaciones" },
  { href: "#alquileres", label: "Equipos" },
  { href: "#repuestos", label: "Repuestos" },
  { href: "#curenas", label: "Cureñas" },
  { href: "#preguntas", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-8">
        {/* Logo with slogan needs 300px min width (brand guide); below sm there is no room, so use the version without slogan (150px min) */}
        <a href="#" className="shrink-0" aria-label="Repuestos FayFa — Inicio">
          <img src={logo} alt="FAYFA Pablo Brenes — Equipo pesado, industria, transporte" width={2137} height={640} className="hidden sm:block h-24 w-auto" />
          <img src={logoCompact} alt="FAYFA Pablo Brenes" width={2137} height={600} className="sm:hidden h-11 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 lg:gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/85 hover:text-white underline-offset-8 decoration-2 decoration-primary hover:underline transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-white"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav id="mobile-menu" className="lg:hidden border-t border-white/10 bg-navy pb-2">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm font-medium text-white/85 hover:text-white hover:bg-white/10 transition-colors"
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
