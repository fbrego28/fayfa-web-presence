import { useState } from "react";
import { MessageSquare, Mail, Instagram, Send } from "lucide-react";

const serviceOptions = [
  "Reparaciones",
  "Alquileres",
  "Repuestos",
  "Cureñas",
  "Pagos y cobros",
  "No estoy seguro",
  "Otro",
];

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/xpwdjqvl", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSent(true);
      form.reset();
    } catch {
      alert("Error al enviar. Por favor intente por WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" className="py-20">
      <div className="container max-w-4xl">
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-foreground mb-4 text-center">
          Contáctenos
        </h2>
        <p className="max-w-2xl mx-auto text-center text-muted-foreground mb-10">
          Para una respuesta más rápida, utilice WhatsApp. Para consultas
          escritas, complete el formulario. Por favor brinde detalles claros
          para poder atenderle con mayor eficiencia.
        </p>

        {/* WhatsApp buttons */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <a
            href="https://wa.me/50683423216?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-6 rounded-lg border border-border bg-card hover:border-whatsapp/60 transition-colors text-center"
          >
            <MessageSquare size={28} className="text-whatsapp" />
            <span className="font-display text-sm font-bold uppercase text-foreground">
              Dueño
            </span>
            <span className="text-xs text-muted-foreground">
              Consultas generales, reparaciones, alquileres y cureñas
            </span>
            <span className="text-xs text-primary font-semibold">
              +506 8342 3216
            </span>
          </a>
          <a
            href="https://wa.me/50672043545?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20sobre%20un%20pago%20o%20estado%20de%20cuenta."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-6 rounded-lg border border-border bg-card hover:border-whatsapp/60 transition-colors text-center"
          >
            <MessageSquare size={28} className="text-whatsapp" />
            <span className="font-display text-sm font-bold uppercase text-foreground">
              Oficina
            </span>
            <span className="text-xs text-muted-foreground">
              Pagos, cobros, estados de cuenta y repuestos
            </span>
            <span className="text-xs text-primary font-semibold">
              +506 7204 3545
            </span>
          </a>
        </div>

        {/* Email & Instagram */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm text-muted-foreground">
          <a
            href="mailto:repuestosfayfa@gmail.com"
            className="inline-flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail size={16} />
            repuestosfayfa@gmail.com
          </a>
          <a
            href="https://www.instagram.com/repuestos_pablo_brenes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Instagram size={16} />
            @repuestos_pablo_brenes
          </a>
        </div>

        {/* Form */}
        {sent ? (
          <div className="rounded-lg border border-primary/40 bg-primary/10 p-8 text-center">
            <h3 className="font-display text-xl font-bold text-primary mb-2">
              Mensaje enviado
            </h3>
            <p className="text-muted-foreground text-sm">
              Hemos recibido su consulta. Le responderemos en horario hábil.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="nombre"
                type="text"
                required
                placeholder="Nombre completo *"
                className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <input
                name="empresa"
                type="text"
                placeholder="Nombre de empresa (opcional)"
                className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="telefono"
                type="tel"
                required
                placeholder="Número de teléfono *"
                className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <select
                name="servicio"
                required
                defaultValue=""
                className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              >
                <option value="" disabled>
                  Servicio de interés *
                </option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <textarea
              name="mensaje"
              required
              rows={4}
              placeholder="Por favor describa su necesidad con el mayor detalle posible."
              className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
            />
            <input type="hidden" name="_replyto" value="" />
            <button
              type="submit"
              disabled={sending}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-primary text-primary-foreground font-display font-bold uppercase tracking-wider text-sm hover:bg-amber-hover transition-colors disabled:opacity-50"
            >
              <Send size={16} />
              {sending ? "Enviando..." : "Enviar Mensaje"}
            </button>
            <p className="text-xs text-muted-foreground">
              Las respuestas se brindan en horario hábil: lunes a sábado,
              8:00 a.m. – 5:00 p.m.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
