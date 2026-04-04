import { MessageSquare, Truck } from "lucide-react";

const units = [
  { name: "Camión Distribuidor de Agua", desc: "Distribución de agua no potable. Ideal para obras de construcción, trabajos viales y operaciones municipales." },
  { name: "Mini Cargador Caterpillar 246C", year: "2009", desc: "Cargador compacto tipo skid steer. Apto para excavación, manejo de materiales y espacios reducidos." },
  { name: "Grúa Digger", year: "2009", desc: "Grúa especializada para instalación de postes. Diseñada para la siembra de postes de electricidad y operaciones similares." },
  { name: "Montacargas Caterpillar — 4 Toneladas", year: "1990", desc: "Montacargas de uso intensivo para bodegas, patios o aplicaciones industriales." },
  { name: "Camión Freightliner M2 Furgón Cerrado con Rampa Hidráulica", year: "2014", desc: "Camión de carga cerrado con rampa hidráulica de carga. Apto para transporte y distribución de mercadería." },
  { name: "Camión Recolector de Basura", year: "2002", desc: "Vehículo recolector de carga trasera para operaciones municipales o privadas de recolección de residuos." },
  { name: "Camión Recolector de Basura", year: "2003", desc: "Segunda unidad disponible para contratos extendidos u operaciones simultáneas." },
  { name: "Mula Patiera Ottawa", year: "1998", desc: "Mula patiera para movimiento de contenedores y remolques en patios, puertos y centros de distribución." },
  { name: "Mula Patiera Ottawa", year: "2003", desc: "Segunda unidad disponible para operaciones simultáneas o contratos extendidos." },
];

const Rentals = () => (
  <section id="alquileres" className="py-20">
    <div className="container">
      <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-foreground mb-4 text-center">
        Alquiler de Equipo y <span className="text-primary">Camiones</span>
      </h2>
      <p className="max-w-2xl mx-auto text-center text-muted-foreground mb-12">
        Contamos con una flota de vehículos y equipo especializado disponible
        para alquiler. Todas las unidades reciben mantenimiento regular y están
        listas para operar. La disponibilidad y condiciones de alquiler se
        confirman directamente.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {units.map((u, i) => (
          <div
            key={i}
            className="rounded-lg border border-border bg-card p-6 hover:border-primary/40 transition-colors"
          >
            <div className="flex items-start gap-3 mb-3">
              <Truck size={20} className="text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                  {u.name}
                </h3>
                {u.year && (
                  <span className="text-xs text-primary font-semibold">
                    Año {u.year}
                  </span>
                )}
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {u.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="https://wa.me/50683423216?text=Hola%2C%20estoy%20interesado%20en%20alquilar%20equipo.%20Por%20favor%20br%C3%ADndeme%20detalles%20y%20disponibilidad."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-whatsapp text-foreground font-display font-bold uppercase tracking-wider text-sm hover:bg-whatsapp-hover transition-colors"
        >
          <MessageSquare size={18} />
          Consultar Disponibilidad por WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default Rentals;
