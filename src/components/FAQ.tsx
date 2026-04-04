import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Dónde están ubicados?",
    a: 'Estamos ubicados 25 metros norte de la Iglesia Católica de Lourdes de Aguacaliente, Cartago, Costa Rica.',
    link: { label: "Ver en Google Maps", url: "https://www.google.com/maps/place/Lourdes,+Aguacaliente,+Cartago,+Costa+Rica/@9.8467,-83.9067,15z" },
  },
  { q: "¿Cuál es el horario de atención?", a: "Lunes a sábado: 8:00 a.m. – 5:00 p.m. Cerrado los domingos." },
  { q: "¿Trabajan con empresas y flotillas?", a: "Sí. Trabajamos con operadores individuales, empresas y cuentas de flotillas corporativas." },
  { q: "¿Qué tipos de camiones atienden?", a: "Atendemos todo tipo de camiones y equipo pesado, desde vehículos comerciales livianos hasta camiones de carga pesada y maquinaria de construcción." },
  { q: "¿Ofrecen servicio de alquiler?", a: "Sí. Contamos con una flota de camiones y equipo disponible para alquiler, incluyendo camiones cisterna, cargadores, grúas, montacargas y camiones recolectores." },
  { q: "¿Cómo solicito una cotización?", a: "Use los botones de WhatsApp en cada sección de servicio o complete el formulario de contacto. Cuanto más detalle nos brinde, más rápida será nuestra respuesta." },
  { q: "¿Qué repuestos manejan?", a: "Manejamos y conseguimos repuestos para una amplia variedad de camiones y equipo pesado. Contáctenos con los datos de su vehículo y el repuesto específico que necesita." },
  { q: "¿Cuánto tiempo lleva el negocio?", a: "Llevamos 13 años en operación, desde agosto del 2011. El 3 de agosto celebramos 14 años." },
  { q: "¿Importan las cureñas?", a: "Sí. Importamos cureñas directamente desde Estados Unidos por vía marítima, las restauramos y las vendemos localmente. También están disponibles en alquiler." },
  { q: "¿A qué número llamo para pagos o estados de cuenta?", a: "Para pagos, cobros y estados de cuenta, comuníquese con nuestra oficina al +506 7204 3545." },
];

const FAQ = () => (
  <section id="preguntas" className="py-20 bg-secondary">
    <div className="container max-w-3xl">
      <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-foreground mb-10 text-center">
        Preguntas <span className="text-primary">Frecuentes</span>
      </h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="border border-border rounded-lg bg-card px-6 data-[state=open]:border-primary/40"
          >
            <AccordionTrigger className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-foreground hover:no-underline py-4">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              {f.a}
              {f.link && (
                <>
                  {" "}
                  <a
                    href={f.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-amber-hover"
                  >
                    {f.link.label}
                  </a>
                </>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
