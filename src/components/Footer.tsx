import { MessageSquare, Mail, Instagram, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { href: "#reparaciones", label: "Reparaciones" },
  { href: "#alquileres", label: "Alquileres" },
  { href: "#repuestos", label: "Repuestos" },
  { href: "#curenas", label: "Cureñas" },
  { href: "#preguntas", label: "Preguntas Frecuentes" },
  { href: "#contacto", label: "Contacto" },
];

const Footer = () => (
  <footer className="bg-card border-t border-border py-16">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <h3 className="font-display text-xl font-bold text-primary mb-2">
            REPUESTOS FAYFA
          </h3>
          <p className="text-sm text-muted-foreground">
            13 años de experiencia en camiones, repuestos y equipo pesado.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex items-start gap-2">
            <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
            <span>
              25 metros norte de la Iglesia Católica, Lourdes de Aguacaliente,
              Cartago, Costa Rica
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-primary shrink-0" />
            <span>Lun–Sáb 8:00 a.m. – 5:00 p.m. | Dom cerrado</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-primary shrink-0" />
            <a href="mailto:repuestosfayfa@gmail.com" className="hover:text-primary transition-colors">
              repuestosfayfa@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Instagram size={14} className="text-primary shrink-0" />
            <a
              href="https://www.instagram.com/repuestos_pablo_brenes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              @repuestos_pablo_brenes
            </a>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MessageSquare size={14} className="text-whatsapp shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Dueño:</span>{" "}
              <a href="https://wa.me/50683423216" className="hover:text-primary transition-colors">+506 8342 3216</a>
            </div>
          </div>
          <p className="pl-5 text-xs">Consultas generales, reparaciones, alquileres y cureñas</p>
          <div className="flex items-center gap-2">
            <MessageSquare size={14} className="text-whatsapp shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Oficina:</span>{" "}
              <a href="https://wa.me/50672043545" className="hover:text-primary transition-colors">+506 7204 3545</a>
            </div>
          </div>
          <p className="pl-5 text-xs">Pagos, cobros, estados de cuenta y repuestos</p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase text-foreground mb-3">
            Enlaces Rápidos
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © 2025 Repuestos Fayfa. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
