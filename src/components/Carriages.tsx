import { MessageSquare, ShoppingCart, CalendarClock } from "lucide-react";

const Carriages = () => (
  <section id="curenas" className="py-20">
    <div className="container">
      <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-foreground mb-4 text-center">
        Venta y Alquiler de <span className="text-primary">Cureñas</span>
      </h2>
      <p className="max-w-2xl mx-auto text-center text-muted-foreground mb-12">
        Importamos cureñas directamente desde los Estados Unidos, transportadas
        por vía marítima hasta Costa Rica. Cada unidad es inspeccionada,
        reparada y restaurada completamente antes de su venta, garantizando que
        reciba una cureña en condiciones óptimas. También ofrecemos cureñas en
        alquiler. Precios y especificaciones se brindan bajo consulta.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
        <div className="rounded-lg border border-border bg-card p-8 text-center hover:border-primary/40 transition-colors">
          <ShoppingCart size={36} className="text-primary mx-auto mb-4" />
          <h3 className="font-display text-xl font-bold uppercase text-foreground mb-2">
            Compra
          </h3>
          <p className="text-sm text-muted-foreground">
            Adquiera una cureña restaurada de calidad importada
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-8 text-center hover:border-primary/40 transition-colors">
          <CalendarClock size={36} className="text-primary mx-auto mb-4" />
          <h3 className="font-display text-xl font-bold uppercase text-foreground mb-2">
            Alquiler
          </h3>
          <p className="text-sm text-muted-foreground">
            Disponible para alquiler a corto o largo plazo
          </p>
        </div>
      </div>

      <div className="text-center">
        <a
          href="https://wa.me/50683423216?text=Hola%2C%20estoy%20interesado%20en%20una%20cure%C3%B1a.%20Por%20favor%20br%C3%ADndeme%20detalles%20y%20precios."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-whatsapp text-foreground font-display font-bold uppercase tracking-wider text-sm hover:bg-whatsapp-hover transition-colors"
        >
          <MessageSquare size={18} />
          Consultar sobre Cureñas por WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default Carriages;
