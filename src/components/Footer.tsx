import { MessageSquare, Mail, Instagram, MapPin, Clock } from "lucide-react";
import logo from "@/assets/brand/fayfa-logo-sin-eslogan-invertido.svg";
import { yearsInBusiness } from "@/lib/business";

const quickLinks = [
  { href: "#reparaciones", label: "Reparaciones" },
  { href: "#alquileres", label: "Alquileres" },
  { href: "#repuestos", label: "Repuestos" },
  { href: "#curenas", label: "Cureñas" },
  { href: "#preguntas", label: "Preguntas Frecuentes" },
  { href: "#contacto", label: "Contacto" },
];

const Footer = () => (
  <footer className="bg-navy text-white/75 pt-16 pb-24 sm:pb-16">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <img src={logo} alt="FAYFA" width={2137} height={560} className="w-48 h-auto mb-6" />
          <p className="text-sm">
            {yearsInBusiness()} años de experiencia en camiones, repuestos y equipo pesado.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-2">
            <MapPin size={14} className="text-white/60 mt-0.5 shrink-0" />
            <span>
              25 metros norte de la Iglesia Católica, Lourdes de Aguacaliente,
              Cartago, Costa Rica
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-white/60 shrink-0" />
            <span>Lun–Sáb 8:00 a.m. – 5:00 p.m. | Dom cerrado</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-white/60 shrink-0" />
            <a href="mailto:repuestosfayfa@gmail.com" className="hover:text-white hover:underline transition-colors">
              repuestosfayfa@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Instagram size={14} className="text-white/60 shrink-0" />
            <a
              href="https://www.instagram.com/repuestos_pablo_brenes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline transition-colors"
            >
              @repuestos_pablo_brenes
            </a>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <MessageSquare size={14} className="text-whatsapp shrink-0" />
            <div>
              <span className="font-semibold text-white">Dueño:</span>{" "}
              <a href="https://wa.me/50683423216" className="hover:text-white hover:underline transition-colors">+506 8342 3216</a>
            </div>
          </div>
          <p className="pl-5 text-xs">Consultas generales, reparaciones, alquileres y cureñas</p>
          <div className="flex items-center gap-2">
            <MessageSquare size={14} className="text-whatsapp shrink-0" />
            <div>
              <span className="font-semibold text-white">Oficina:</span>{" "}
              <a href="https://wa.me/50672043545" className="hover:text-white hover:underline transition-colors">+506 7204 3545</a>
            </div>
          </div>
          <p className="pl-5 text-xs">Pagos, cobros, estados de cuenta y repuestos</p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase text-white mb-3">
            Enlaces Rápidos
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm hover:text-white hover:underline transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15 pt-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Fa&amp;Fa S.A. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
