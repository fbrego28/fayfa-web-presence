import { MessageSquare, Cog, Zap, Shield, CircleDot, Cable, Layers } from "lucide-react";

const categories = [
  { icon: Cog, label: "Componentes de Motor" },
  { icon: CircleDot, label: "Piezas de Transmisión" },
  { icon: Layers, label: "Suspensión y Ejes" },
  { icon: Shield, label: "Frenos e Hidráulicos" },
  { icon: Zap, label: "Sistemas Eléctricos" },
  { icon: Cable, label: "Carrocería y Chasis" },
];

const Parts = () => (
  <section id="repuestos" className="py-20 bg-secondary">
    <div className="container">
      <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-foreground mb-4 text-center">
        Repuestos y Componentes{" "}
        <span className="text-primary">para Camiones</span>
      </h2>
      <p className="max-w-2xl mx-auto text-center text-muted-foreground mb-12">
        Contamos con repuestos para todo tipo de camiones y equipo pesado. Ya
        sea una pieza de reposición común o un componente específico, podemos
        ayudarle. Contáctenos con los datos de su vehículo y la pieza que
        necesita — le confirmamos disponibilidad y precio a la brevedad.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
        {categories.map((c) => (
          <div
            key={c.label}
            className="flex flex-col items-center gap-3 p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors text-center"
          >
            <c.icon size={32} className="text-primary" />
            <span className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
              {c.label}
            </span>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="https://wa.me/50672043545?text=Hola%2C%20estoy%20buscando%20un%20repuesto%20espec%C3%ADfico%20para%20cami%C3%B3n.%20Por%20favor%20ind%C3%ADqueme%20disponibilidad%20y%20precio."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-whatsapp text-foreground font-display font-bold uppercase tracking-wider text-sm hover:bg-whatsapp-hover transition-colors"
        >
          <MessageSquare size={18} />
          Consultar Repuestos por WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default Parts;
