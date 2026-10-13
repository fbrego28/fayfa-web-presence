import heroVideo from "@/assets/hero-video.mp4";
import heroPoster from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-navy">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        src={heroVideo}
        poster={heroPoster}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/50 to-navy/85" />

      {/* Content */}
      <div className="relative h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center pt-28">
          <div className="text-center px-4">
            <h1 className="max-w-5xl mx-auto">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight text-balance">
                Repuestos, reparación, equipos y transporte.
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mt-2 text-white/85">
                Una sola empresa
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto mt-6">
              Respaldo para cada kilómetro
            </p>

            <div className="flex items-center justify-center gap-4">
              <a
                href="#contacto"
                className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Cotización
              </a>
              <a
                href="#contacto"
                className="px-6 py-2.5 rounded-full bg-transparent text-white font-semibold border border-white/60 hover:bg-white/10 transition-colors"
              >
                Contáctenos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
