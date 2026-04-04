import { MessageSquare } from "lucide-react";
import workshopImg from "@/assets/workshop.jpg";

const Repairs = () => (
  <section id="reparaciones" className="py-20 bg-secondary">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-foreground mb-6">
            Reparación de Camiones y{" "}
            <span className="text-primary">Equipo Pesado</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Damos servicio a todo tipo de camiones y equipo pesado, desde
            vehículos comerciales livianos hasta camiones de carga pesada y
            maquinaria de construcción. Con más de 13 años de experiencia,
            nuestro equipo realiza diagnósticos, reparaciones mecánicas y
            mantenimiento con precisión y eficiencia. Trabajamos con operadores
            individuales y cuentas de flotillas corporativas.
          </p>
          <a
            href="https://wa.me/50683423216?text=Hola%2C%20necesito%20servicio%20de%20reparaci%C3%B3n%20para%20un%20cami%C3%B3n.%20Por%20favor%20br%C3%ADndeme%20informaci%C3%B3n%20para%20proceder%20con%20una%20cotizaci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-whatsapp text-foreground font-display font-bold uppercase tracking-wider text-sm hover:bg-whatsapp-hover transition-colors"
          >
            <MessageSquare size={18} />
            Solicitar Cotización por WhatsApp
          </a>
        </div>
        <div className="rounded-lg overflow-hidden border border-border">
          {/* Reemplazar con foto real del taller */}
          <img
            src={workshopImg}
            alt="Taller de reparación de camiones pesados"
            width={1280}
            height={720}
            loading="lazy"
            className="w-full h-72 lg:h-96 object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Repairs;
