import { MessageSquare, HelpCircle } from "lucide-react";

const NotSure = () => (
  <section className="py-16 bg-primary">
    <div className="container text-center">
      <HelpCircle size={40} className="text-primary-foreground mx-auto mb-4" />
      <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-primary-foreground mb-3">
        ¿No sabe qué necesita?
      </h2>
      <p className="max-w-lg mx-auto text-primary-foreground/80 mb-6">
        Si no está seguro de cuál servicio se adapta mejor a su situación,
        contáctenos directamente. Evaluamos su necesidad y le recomendamos la
        mejor solución.
      </p>
      <a
        href="https://wa.me/50683423216?text=Hola%2C%20no%20estoy%20seguro%20de%20qu%C3%A9%20servicio%20necesito.%20%C2%BFMe%20pueden%20orientar%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-background text-foreground font-display font-bold uppercase tracking-wider text-sm hover:bg-secondary transition-colors"
      >
        <MessageSquare size={18} />
        Escríbanos por WhatsApp
      </a>
    </div>
  </section>
);

export default NotSure;
