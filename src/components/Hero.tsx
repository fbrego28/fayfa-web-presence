import { MessageSquare, Truck, Wrench, Package } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Patio de camiones pesados al anochecer"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>

      <div className="relative container py-20 text-center">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-primary">
            Sirviendo a Costa Rica desde 2011
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-[0.95] mb-6 text-foreground">
          Soluciones en Reparación,{" "}
          <span className="text-gradient">Alquiler y Repuestos</span>{" "}
          para Camiones
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground mb-10">
          Más de 13 años brindando servicios confiables y profesionales para
          camiones y equipo pesado en toda Costa Rica.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#reparaciones"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-display font-bold uppercase tracking-wider text-sm hover:bg-amber-hover transition-colors"
          >
            <Wrench size={18} />
            Solicitar Cotización de Reparación
          </a>
          <a
            href="#alquileres"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-primary/50 text-primary font-display font-bold uppercase tracking-wider text-sm hover:bg-primary/10 transition-colors"
          >
            <Truck size={18} />
            Alquilar Equipo
          </a>
          <a
            href="#repuestos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-border text-foreground font-display font-bold uppercase tracking-wider text-sm hover:bg-secondary transition-colors"
          >
            <Package size={18} />
            Buscar Repuestos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
